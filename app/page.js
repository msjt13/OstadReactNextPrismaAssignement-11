import Link from 'next/link';

export default function Home() {
    return (
        <main className="bg-gray-100 min-h-screen p-5 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-blue-600 font-bold mb-5">Welcome to our blog</h1>
            <p>
                <Link className="text-blue-500 hover:underline" href="/blog">
                    Go to Blog
                </Link>
            </p>
        </main>
    );
}
