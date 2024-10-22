import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <span className="text-2xl font-bold">Next.js Data Fetching</span>
        <p className="text-center sm:text-left">
          This is a demo to illustrate the differences between static and server-side rendering in Next.js.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <Link href="/test1">Test 1 (Static)- Page and component server based data retrieved in page</Link>
          </li>
          <li className="mb-2">
            <Link href="/test2">Test 2 (Static)- Page server based data retrieved in action but requested by client component</Link>
          </li>
          <li className="mb-2">
            <Link href="/test3">Test 3 (Static)- Page and component server based data retrieved in server component</Link>
          </li>
          <li className="mb-2">
            <Link href="/test4">Test 4 (Static)- Page server based data retrieved in client component</Link>
          </li>
          <li className="mb-2">
            <Link href="/test5">Test 5 (Static)- Page server based data retrieved in client component action with param</Link>
          </li>
          <li className="mb-2">
            <Link href="/test6">Test 6 (On Demand server)- Page server based data retrieved in client component action with param through dynamic paths</Link>
          </li>
          <li className="mb-2">
            <Link href="/test7">Test 7 (SSG)- Page server based data retrieved in client component action with param through dynamic paths (getStaticParams)</Link>
          </li>
          <li className="mb-2">
            <Link href="/test8">Test 8 (Static)- Page server based 3 client independent components, Clock refreshes every 5 secs with server time, Timestamp generated on page load, Content generated on build</Link>
          </li>
        </ol>

      </main>
    </div>
  );
}
