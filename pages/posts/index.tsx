import Link from "next/link";
import getPosts from "../../lib/posts";

export default function Posts({ posts }) {
  return (
    <>
      <h2>Posts</h2>
      {posts.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}
