import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>Welcome to our blog</h1>
            <p>
                <Link href="/blog">Go to Blog</Link>
            </p>
        </main>
    );
}
