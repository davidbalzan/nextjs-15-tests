"use client"

import { useState, useEffect } from "react";
import getTime from "../actions/action";

const Timestamp = () => {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        const updateTime = async () => {
            const serverTime = await getTime();
            setTime(serverTime);
        };

        updateTime(); // Update time immediately after mount

    }, []);

    if (!time) {
        // Render a static time for SSR
        return <div>Loading...</div>;
    }

    return <div>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>;
};

export default Timestamp;