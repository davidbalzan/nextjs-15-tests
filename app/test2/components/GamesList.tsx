"use client";

import { Game } from "../lib/Game"


export const GamesList = ({ games }: { games: Game[] }) => {
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