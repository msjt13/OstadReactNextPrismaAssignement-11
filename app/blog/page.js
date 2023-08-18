import Link from 'next/link';
import blogPosts from '@/data/blogData.json';

const page = () => {
    return (
        <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8 px-4">
            <h1 className="text-4xl text-blue-600 font-bold mb-8">Blog</h1>
            <ul className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                {blogPosts.map((post) => (
                    <li key={post.id} className="mb-4 last:mb-0">
                        <Link className="text-lg text-blue-500 hover:underline" href={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default page;
