import getGames from "../actions/action";


export const GamesList = async () => {
    const games = await getGames();
    return (
        <div>
            <h1>Test 3</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>

        </div>
    )
}