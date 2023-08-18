'use client';

import blogPosts from '@/data/blogData.json';

function PostPage({ params }) {
    const id = params.id;
    const post = blogPosts.find((post) => post.id === id);

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Published on {post.date}</p>
        </main>
    );
}

export default PostPage;
