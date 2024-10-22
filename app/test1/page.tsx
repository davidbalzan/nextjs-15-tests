import getGames from "./actions/action";
import { GamesList } from "./components/GamesList";

export default async function Test1() {
    const games = await getGames();

    return (
        <div>
            <h1>Test1</h1>
            <GamesList games={games}/>

        </div>
    )
}