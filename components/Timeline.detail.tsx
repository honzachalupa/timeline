import { Date, Event } from "@/types/event";
import { getStandardDate } from "@/utils/event";
import { formatDate } from "@/utils/formatting";
import React, { useEffect, useState } from "react";

interface IProps {
    event: Event;
}

export const EventDetail: React.FC<IProps> = ({ event }) => {
    const [isOpened, setIsOpened] = useState<boolean>(!!event);

    const dateFrom = getStandardDate(
        (event?.dateFrom ? event.dateFrom : event.date) as Date
    );
    const dateTo = getStandardDate(
        (event?.dateTo ? event.dateTo : event.date) as Date
    );

    const handleClose = () => {
        setIsOpened(false);
    };

    useEffect(() => {
        setIsOpened(true);
    }, [event]);

    return isOpened ? (
        <div className="fixed bottom-0 right-0">
            <div className="w-[70%] min-h[20vh] bg-[rgba(211, 211, 211, 0.5)] backdrop-blur-md p-5 mx-5 my-auto">
                <button onClick={handleClose}>Close</button>

                <p>Name: {event.name}</p>

                <p>
                    Date: {formatDate(dateFrom)}
                    {!event.isPoint ? ` - ${formatDate(dateTo)}` : ""}
                </p>

                {event.duration > 0 && (
                    <p>
                        Duration:{" "}
                        {Math.round((event.duration / 31536000000) * 10) / 10}{" "}
                        years
                    </p>
                )}
            </div>
        </div>
    ) : null;
};
