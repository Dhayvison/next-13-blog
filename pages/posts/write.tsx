import * as React from "react";
import dynamic from "next/dynamic";
import {
  Card,
  Container,
  Divider,
  Input,
  Text,
  useTheme,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import { Box } from "../../app/components/layout/Box";

type ChangeMarkdownEditor = {
  text: string;
};

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function WritePost() {
  const { theme } = useTheme();

  const [title, setTitle] = React.useState("");

  const [content, setContent] = React.useState("");

  function handleEditorChange({ text }: ChangeMarkdownEditor) {
    setContent(text);
  }

  return (
    <Container lg css={{ mt: 24 }}>
      <Text h1>Escreva seu post</Text>
      <Divider />

      <Box css={{ mt: 24, flexDirection: "column", gap: 24 }}>
        <Input
          label="Título"
          size="lg"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <MdEditor
          value={content}
          view={{
            menu: true,
            md: true,
            html: false,
          }}
          style={{
            width: "100%",
            height: 300,
            color: theme?.colors.text.value,
            borderRadius: theme?.radii.base.value,
            backgroundColor: theme?.colors.background.value,
            overflow: "hidden",
          }}
          renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
          onChange={handleEditorChange}
        />
      </Box>

      <Card variant="bordered" css={{ my: 24 }}>
        <Card.Header>
          <Text h4>Pré-visualização</Text>
        </Card.Header>
        <Card.Body>
          <Text h1>{title}</Text>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Card.Body>
      </Card>
    </Container>
  );
}
