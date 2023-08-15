'use client';

function PostPage({ params }) {
    const slug = params.slug;

    return (
        <main>
            <h1>Blog post: {slug}</h1>
            <p>This is the content of the blog post.</p>
        </main>
    );
}

export default PostPage;
