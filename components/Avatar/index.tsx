import { styled } from "../../stitches.config";
import * as RAvatar from "@radix-ui/react-avatar";

const StyledAvatar = styled(RAvatar.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 48,
  height: 48,
  borderRadius: 24
});

const StyledImage = styled(RAvatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover"
});

const StyledFallback = styled(RAvatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "dodgerblue"
});

export const Avatar = () => (
  <StyledAvatar>
    <StyledImage src="https://picsum.photos/id/1005/400/400" />
    <StyledFallback>UI</StyledFallback>
  </StyledAvatar>
);
