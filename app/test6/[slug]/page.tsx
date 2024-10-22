import { GamesList } from "../components/GamesList";


export default async function Test1({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    let active = true;
    if (!slug) {
        return <div>Invalid slug</div>
    } else if (slug === 'active') {
        active = true;
    } else if (slug === 'inactive') {
        active = false;
    }

    return (
        <div>
            <h1>Test 6 - data retrieved in client component action with param dynamic path</h1>
            <GamesList active={active} />
        </div>
    )
}