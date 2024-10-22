import Link from "next/link";

export default async function Test1() {

    return (
        <div>
            <h1>Test 6 - data retrieved in client component action with param dynamic path</h1>
            <Link href="./active">Active</Link>
            <Link href="./inactive">Inactive</Link>
        </div>
    )
}