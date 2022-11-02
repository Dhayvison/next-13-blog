import { Container, Divider, Text } from "@nextui-org/react";
import { Post } from "@prisma/client";

import { getPost, getPosts } from "../../lib/posts";
import { makeSerializable } from "../../lib/utils";

type PostProps = {
  post: Post;
};

export default function PostView({ post }: PostProps) {
  return (
    <Container lg css={{ mt: 24 }}>
      <Text h1> {post.title} </Text>
      <Text h5>{new Date(post.updatedAt).toLocaleString()}</Text>
      <Divider css={{ my: 24 }} />
      {post.content}
    </Container>
  );
}

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/posts/${post.id}`),
    fallback: false,
  };
};

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = await getPost(params.id);

  return {
    props: {
      post: makeSerializable(post),
    },
  };
}
