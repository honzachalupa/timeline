import { FilterData } from "@/components/Timeline.filter";
import { Date, Event, EventBasic, ProcessedEvents } from "@/types/event";
import moment, { Moment } from "moment";

export const getDateReferencedDate = (reference: Date["reference"]) => {
    let date: Moment;

    if (reference === "now") {
        date = moment();
    } else if (reference === "birth-of-christ") {
        date = moment("0000-01-01");
    } else {
        throw new Error("Undefined time reference.");
    }

    return date;
};

export const getStandardDate = ({ value, unit, reference }: Date) => {
    let date: Moment;

    if (unit === "date") {
        date = value as Moment;
    } else if (unit === "years" || unit === "months" || unit === "hours") {
        if (Math.abs(value as number) > 250000) {
            throw new Error("Date value is too high.");
        }

        date = getDateReferencedDate(reference).add(value as number, unit);
    } else {
        throw new Error("Undefined time unit.");
    }

    return date;
};

const groupedByCategory = (events: Event[]) => {
    const grouped: {
        [key: string]: any[];
    } = {};

    events.forEach((event) => {
        grouped[event.category] = [...(grouped[event.category] || []), event];
    });

    return Object.entries(grouped).map(([id, events]) => ({
        id,
        events: events as Event[],
    }));
};

export const processEvents = (
    events: EventBasic[],
    filter: FilterData
): ProcessedEvents => {
    // @ts-ignore
    const eventsAll: Event[] = events
        .filter((event) => {
            const dateFrom = getStandardDate(
                (event?.dateFrom ? event.dateFrom : event.date) as Date
            );
            const dateTo = getStandardDate(
                (event?.dateTo ? event.dateTo : event.date) as Date
            );

            if (
                dateFrom.valueOf() >= filter.dateFrom.valueOf() &&
                dateFrom.valueOf() <= filter.dateTo.valueOf() &&
                dateTo.valueOf() >= filter.dateFrom.valueOf() &&
                dateTo.valueOf() <= filter.dateTo.valueOf()
            ) {
                return true;
            }

            return false;
        })
        .map((event) => {
            const dateFrom = getStandardDate(
                (event?.dateFrom ? event.dateFrom : event.date) as Date
            );
            const dateTo = getStandardDate(
                (event?.dateTo ? event.dateTo : event.date) as Date
            );

            const positionStart = dateFrom.valueOf();
            const positionEnd = dateTo.valueOf();

            const duration = Math.abs(positionEnd - positionStart);
            const isPoint = event?.date || duration === 0;

            return {
                ...event,
                id: `${event.name}_${Math.random()}`, // TODO
                positionStart,
                positionEnd,
                duration,
                isPoint,
            };
        });

    if (eventsAll.length > 0) {
        const eventsAllSorted = {
            oldest: [...eventsAll].sort(
                (a, b) => a.positionStart - b.positionStart
            ),
            newest: [...eventsAll].sort(
                (a, b) => b.positionEnd - a.positionEnd
            ),
        };
        const eventOldest = eventsAllSorted.oldest[0];
        const eventLatest = eventsAllSorted.newest[0];

        const range = eventLatest.positionEnd - eventOldest.positionStart;

        return {
            all: eventsAllSorted.oldest,
            oldest: eventOldest,
            newest: eventLatest,
            grouped: groupedByCategory(eventsAllSorted.oldest),
            rangePaddingLeft: eventOldest.positionStart,
            range,
        };
    }

    return {
        all: [],
        oldest: undefined as unknown as Event,
        newest: undefined as unknown as Event,
        grouped: [],
        rangePaddingLeft: 0,
        range: 0,
    };
};
