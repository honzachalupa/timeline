import { Moment } from "moment";

export const categories = {
    war: "War",
    religion: "Religion",
    "czech-republic": "Czech Republic",
    other: "Other",
};

export interface Date {
    value: Moment | number;
    unit: "date" | "years" | "months" | "hours";
    reference: "now" | "birth-of-christ";
}

export interface EventBasic {
    id?: string;
    name: string;
    category: keyof typeof categories;
    tags: string[];
    date?: Date;
    dateFrom?: Date;
    dateTo?: Date;
}

export interface Event extends EventBasic {
    positionStart: number;
    positionEnd: number;
    duration: number;
    isPoint: boolean;
}

export interface ProcessedEvents {
    all: Event[];
    oldest: Event;
    newest: Event;
    grouped: {
        id: string;
        events: Event[];
    }[];
    rangePaddingLeft: number;
    range: number;
}
