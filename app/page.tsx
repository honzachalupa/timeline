"use client";

import { Timeline } from "@/components/Timeline";
import { EventDetail } from "@/components/Timeline.detail";
import { Filter, FilterData } from "@/components/Timeline.filter";
import { LayoutHome as Layout } from "@/layouts/Home";
import { Event } from "@/types/event";
import { processEvents } from "@/utils/event";
import { useMemo, useState } from "react";
import eventsData from "../components/Timeline.data";

export default function Home() {
    const [filter, setFilter] = useState<FilterData>();
    const [selectedEventData, setSelectedEventData] = useState<Event>();

    const data = useMemo(
        () => (filter ? processEvents(eventsData, filter) : undefined),
        [filter]
    );
    const categories = data?.grouped.map(({ id }) => id) || [];

    return (
        <Layout>
            <h1>Timeline</h1>

            <Filter categories={categories} onChange={setFilter} />

            {data && (
                <Timeline data={data} onEventClick={setSelectedEventData} />
            )}

            {selectedEventData && <EventDetail event={selectedEventData} />}
        </Layout>
    );
}
