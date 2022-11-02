import { Card, styled } from "@nextui-org/react";
import { Box } from "./Box";

export const Carrousel = styled(Box, {
  gap: "16px",
  overflowX: "scroll",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
});

export const CarrouselItem = styled(Card, {
  flexShrink: 0,
  scrollSnapAlign: "center",
  scrollSnapStop: "normal",
  overflow: "hidden",
  width: "inherit",
});
