import {
  Button,
  Card,
  Col,
  Container,
  Divider,
  Grid,
  Link,
  Row,
  Text,
  useTheme,
} from "@nextui-org/react";
import Image from "next/image";
import { Box } from "../app/components/layout/Box";
import { Carrousel, CarrouselItem } from "../app/components/layout/Carrousel";
import {
  Call,
  Chat,
  Document,
  Heart,
  Message,
  Send,
  TwoUsers,
  Video,
} from "react-iconly";

export default function Home() {
  const { isDark } = useTheme();

  const carrouselImages = [1002, 1005, 1011, 1015, 1069, 1080, 159, 20, 223];
  const gridImages = [1024, 1027, 1042, 122, 2];

  return (
    <>
      <Container lg css={{ mt: 24 }}>
        <Text h1> Home </Text>
        <Divider />
        <Carrousel css={{ mt: 24 }}>
          {carrouselImages.map((id) => (
            <CarrouselItem key={id}>
              <Image
                src={`https://picsum.photos/id/${id}/1200/600`}
                alt={`card ${id}`}
                width="1200"
                height="600"
              />
            </CarrouselItem>
          ))}
        </Carrousel>

        <Text h2 css={{ my: 100 }}>
          Reprehenderit voluptatum rem illo ad fuga
        </Text>

        <Grid.Container gap={2}>
          {gridImages.map((id) => {
            return (
              <Grid xs={4} key={id}>
                <Card>
                  <Card.Header
                    css={{
                      position: "absolute",
                      zIndex: 1,
                      top: 5,
                    }}
                  >
                    <Col>
                      <Text b transform="uppercase">
                        What to watch
                      </Text>
                      <Text h3 color="white">
                        Stream the Acme event
                      </Text>
                    </Col>
                  </Card.Header>
                  <Card.Image
                    src={`https://picsum.photos/id/${id}/1200/600`}
                    objectFit="cover"
                    alt={`card image background ${id}`}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid.Container>
      </Container>

      <Box css={{ backgroundColor: "Black", p: 100, mt: 200 }}>
        <Container
          lg
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Row>
            <Col>
              <Text h2 color="white">
                Adipisci
              </Text>
              <Text color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos
                assumenda rem fugit iste, atque veniam doloribus expedita
                nesciunt, porro laudantium. Vero id eligendi saepe aspernatur
                sunt perferendis, incidunt magnam.
              </Text>
            </Col>
            <Col></Col>
            <Col css={{ alignSelf: "center" }}>
              <Button
                color="success"
                size="xl"
                ghost
                css={{ width: "100%" }}
                icon={<Send filled />}
              >
                Call to action
              </Button>
            </Col>
          </Row>
        </Container>
      </Box>

      <Box css={{ backgroundColor: "$gray600", p: 100 }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={4}>
            <Col>
              <Text h3 color="white">
                <Document /> Contents
              </Text>
              <ul style={{ color: "white" }}>
                <li>Installation</li>
                <li>Setup</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Using NextUI components</li>
                <li>Individual components import</li>
                <li>NextUIProvider Props</li>
                <li>Typescript types</li>
                <li>Theme object</li>
                <li>Community</li>
                <li>Contributing</li>
              </ul>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col>
              <Text h3 color="white">
                <Call /> Phones
              </Text>
              <ul style={{ color: "white" }}>
                <li>
                  <strong>Support:</strong> (43) 1254 0000
                </li>
                <li>
                  <strong>Financial:</strong> (455) 4554 786678
                </li>
                <li>
                  <strong>SAC:</strong> (2) 23223 12123
                </li>
              </ul>

              <Divider css={{ my: 50 }} />

              <Text h3 color="white">
                <Message /> E-mail
              </Text>
              <ul style={{ color: "white" }}>
                <li>
                  <Link href="mailto:thisisemail@mail.clone">
                    thisisemail@mail.clone
                  </Link>
                </li>
              </ul>

              <Divider css={{ my: 50 }} />

              <Text h3 color="white">
                <TwoUsers /> Social
              </Text>
              <Row justify="space-between" css={{ width: 150, mt: 24 }}>
                <Button auto color="gradient" icon={<Heart filled />} />
                <Button auto color="error" icon={<Video filled />} />
                <Button auto color="success" icon={<Chat filled />} />
              </Row>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Box
              css={{
                ml: 100,
              }}
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={450}
                height={200}
                style={{
                  filter: isDark ? "" : "invert(1)",
                }}
              />
              <Text small>© Vercel 2022</Text>
            </Box>
          </Grid>
        </Grid.Container>
      </Box>
    </>
  );
}
