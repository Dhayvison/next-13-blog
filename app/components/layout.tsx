import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { useTheme as useNextTheme } from "next-themes";
import { Navbar, Switch, Text, User, useTheme } from "@nextui-org/react";
import Link from "next/link";
import { SunIcon } from "../components/icons/SunIcon";
import { MoonIcon } from "../components/icons/MoonIcon";

type LayoutProps = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export default function Layout({ title, children }: LayoutProps) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar shouldHideOnScroll css={{ zIndex: 1000 }}>
        <Navbar.Brand>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
            style={{ filter: isDark ? "invert(1)" : "" }}
          />
          <Text b color="inherit" hideIn="xs" css={{ ml: 8 }}>
            Blog
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight variant="underline">
          <Navbar.Link href="/" as={Link}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/posts" as={Link}>
            Posts
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content hideIn="xs">
          <User
            src="https://dhayvison.github.io/img/photo.jpg"
            name="Dhayvison Braga"
          >
            <User.Link href="https://github.com/Dhayvison">
              @Dhayvison
            </User.Link>
          </User>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            iconOn={
              <MoonIcon filled size={10} height={10} width={10} label="Moon" />
            }
            iconOff={
              <SunIcon filled size={10} height={10} width={10} label="SUN" />
            }
          />
        </Navbar.Content>
      </Navbar>

      <main>{children}</main>
    </>
  );
}
