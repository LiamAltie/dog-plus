import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-primary-dark mb-4">DOG PLUS</h1>
        <p className="text-gray-500 mb-8">サイト準備中です</p>
        <Link
          href="/hearing"
          className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition shadow-md"
        >
          ヒアリングシートへ
        </Link>
      </div>
    </main>
  );
}
