import { categories, Event, ProcessedEvents } from "@/types/event";
import { formatDate, getPercents } from "@/utils/formatting";
import React from "react";

interface TimelineProps {
    data: ProcessedEvents;
    onEventClick: (event: Event) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
    data: timeline,
    onEventClick,
}) => (
    <div className="w-full float-left relative overflow-auto">
        {!!timeline.all.length && (
            <>
                <header className="w-[1000vw] h-[35px] float-left mb-10 flex justify-between">
                    {Array(150)
                        .fill(null)
                        .map((_, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <p key={i}>
                                {formatDate(
                                    (timeline.range / 10) * (i + 1) +
                                        timeline.rangePaddingLeft
                                )}
                            </p>
                        ))}
                </header>

                <section>
                    {timeline.grouped.map((category) => (
                        <div key={category.id} className="w-[1000vw] flex">
                            <p
                                className="theme-glass-effect text-center p-5 sticky left-0 z-10"
                                style={{
                                    writingMode: "vertical-lr",
                                    textOrientation: "upright",
                                }}
                            >
                                {/*
                                    // @ts-ignore */}
                                {categories[category.id]}
                            </p>

                            <div className="basis-full float-left">
                                {category.events.map((event) => {
                                    const height = 20;
                                    const minWidth = 2;

                                    const width = getPercents(
                                        event.duration,
                                        timeline.range
                                    );

                                    const left = getPercents(
                                        event.positionStart -
                                            timeline.rangePaddingLeft,
                                        timeline.range
                                    );

                                    return (
                                        <div
                                            key={event.id}
                                            className="w-full relative float-left"
                                            style={{
                                                height,
                                            }}
                                        >
                                            <div
                                                className="theme-border text-white text-center absolute overflow-hidden cursor-pointer"
                                                style={{
                                                    minWidth,
                                                    width: `${width}%`,
                                                    height,
                                                    left,
                                                }}
                                                onClick={() =>
                                                    onEventClick(event)
                                                }
                                            >
                                                {event.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </section>
            </>
        )}
    </div>
);
