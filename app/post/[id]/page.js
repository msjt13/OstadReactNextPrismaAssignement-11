'use client';

import blogPosts from '@/data/blogData.json';

function PostPage({ params }) {
    const id = params.id;
    const post = blogPosts.find((post) => post.id === id);

    return (
        <main className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
                <h1 className="text-4xl text-blue-600 font-bold mb-4">{post.title}</h1>
                <p className="text-gray-700 text-justify mb-4">{post.content}</p>
                <p className="text-sm text-gray-500 italic">Published on {post.date}</p>
            </div>
        </main>
    );
}

export default PostPage;
