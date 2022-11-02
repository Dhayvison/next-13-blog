import * as React from "react";
import dynamic from "next/dynamic";
import {
  Button,
  Card,
  Container,
  Divider,
  Input,
  Loading,
  SimpleColors,
  Text,
  useTheme,
} from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { Box } from "../../app/components/layout/Box";
import { Notification, PaperUpload } from "react-iconly";
import "react-markdown-editor-lite/lib/index.css";

type ChangeMarkdownEditor = {
  text: string;
};

type AlertType = {
  type: SimpleColors | null;
  text: string | null;
};

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function WritePost() {
  const { theme } = useTheme();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [alert, setAlert] = React.useState<AlertType>({
    type: null,
    text: null,
  });

  function handleEditorChange({ text }: ChangeMarkdownEditor) {
    setContent(text);
  }

  async function submitForm() {
    setIsSubmitting(true);
    const response = await fetch("/api/posts/create", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    if (response.status) {
      setAlert({
        type: "success",
        text: "Sucesso: Seu post já foi publicado",
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Container lg css={{ mt: 24 }}>
      <Text h1>Escreva seu post</Text>
      <Divider />
      {alert.type && (
        <Card
          variant="flat"
          css={{
            my: 24,
          }}
        >
          <Card.Body css={{ backgroundColor: `$${alert.type}` }}>
            <Box css={{ pl: 12, gap: 12, alignItems: "center" }}>
              <Notification />
              <Text size="$lg">{alert.text}</Text>
            </Box>
          </Card.Body>
        </Card>
      )}

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

      <Card variant="bordered" css={{ mt: 24, mb: 64 }}>
        <Card.Header>
          <Text h4>Pré-visualização</Text>
        </Card.Header>
        <Card.Body>
          {title && (
            <>
              <Text h1>{title}</Text>
              <Text h5>{new Date().toLocaleString()}</Text>
              <Divider css={{ my: 24 }} />
            </>
          )}
          <ReactMarkdown>{content}</ReactMarkdown>
        </Card.Body>
      </Card>

      <Button
        shadow
        size="lg"
        disabled={isSubmitting}
        icon={
          isSubmitting ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <PaperUpload />
          )
        }
        css={{ position: "sticky", bottom: 24, w: "100%" }}
        onClick={submitForm}
      >
        Publicar
      </Button>
    </Container>
  );
}
