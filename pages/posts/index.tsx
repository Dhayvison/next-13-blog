import { Card, Container, Divider, Grid, Text } from "@nextui-org/react";
import { Post } from "@prisma/client";
import Link from "next/link";
import { TruncatedText } from "../../app/components/layout/TrucatedText";
import { getPosts } from "../../lib/posts";
import { makeSerializable } from "../../lib/utils";

type PostProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostProps) {
  return (
    <Container lg css={{ mt: 24 }}>
      <Text h1 css={{ textAlign: "center" }}>
        Posts
      </Text>

      <Divider css={{ my: 24 }} />

      <Grid.Container gap={4} justify="center">
        {posts.map(({ id, title, createdAt }) => (
          <Grid xs={12} md={4} key={id}>
            <Link href={`/posts/${id}`} style={{ width: "100%" }}>
              <Card isPressable variant="bordered">
                <Card.Image
                  src="https://nextui.org/images/card-example-4.jpeg"
                  objectFit="cover"
                  width="100%"
                  height={200}
                  alt="Card image background"
                />
                <Card.Body>
                  <TruncatedText h3 transform="revert" title={title}>
                    {title}
                  </TruncatedText>
                  <Text small>{new Date(createdAt).toLocaleDateString()}</Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
}

export async function getStaticProps() {
  const feed = await getPosts();

  return {
    props: {
      posts: makeSerializable(feed),
    },
  };
}
