import { styled, Text } from "@nextui-org/react";

export const TruncatedText = styled(Text, {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
