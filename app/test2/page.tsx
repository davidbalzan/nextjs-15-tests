import getGames from "./actions/action";
import { GamesList } from "./components/GamesList";

export default async function Test1() {
    const games = await getGames();

    return (
        <div>
            <h1>Test 2- client component but data injected from server parent</h1>
            <GamesList games={games} />

        </div>
    )
}