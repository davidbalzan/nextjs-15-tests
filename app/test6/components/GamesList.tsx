"use client";

import { useState, useEffect } from "react";
import getGames from "../actions/action";
import { Game } from "../lib/Game";



export const GamesList = ({ active }: { active: boolean }) => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            const gamesList: Game[] = await getGames(active);
            setGames(gamesList);
        };

        fetchGames();
    }, [active]);

    return (
        <div>
            <h1>Test1</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>

        </div>
    )
}