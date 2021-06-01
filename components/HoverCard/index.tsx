import { styled } from "../../stitches.config";
import * as RHoverCard from "@radix-ui/react-hover-card";

const StyledContent = styled(RHoverCard.Content, {
  borderRadius: 3,
  padding: "20px",
  fontSize: 14,
  backgroundColor: "gainsboro",
  color: "black"
});

const StyledArrow = styled(RHoverCard.Arrow, {
  fill: "gainsboro"
});

export const HoverCard = () => (
  <RHoverCard.Root>
    <RHoverCard.Trigger href="http://twitter.com/twitter">
      @twitter
    </RHoverCard.Trigger>
    <StyledContent side="top" sideOffset={5}>
      <dl>
        <dt>Bio</dt>
        <dd>What's happening?!</dd>
        <dt>Following</dt>
        <dd>35</dd>
        <dt>Followers</dt>
        <dd>59.5M</dd>
      </dl>
      <StyledArrow />
    </StyledContent>
  </RHoverCard.Root>
);
