import Link from 'next/link';
import blogPosts from '@/data/blogData.json';

const page = () => {
    return (
        <main>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default page;
