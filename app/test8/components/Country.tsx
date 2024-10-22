"use client";

import { useEffect, useState } from "react";
import { getCountry } from "../actions/action";

export const Country = () => {
    const [country, setCountry] = useState<string>('ROW');

    useEffect(() => {
        const fetchCountry = async () => {
            const userCountry: string = await getCountry();
            setCountry(userCountry);
        };

        fetchCountry();
    }
        , []);

    return (
        <div>
            {country}
        </div>
    )
}