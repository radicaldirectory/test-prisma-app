import { styled } from "../../stitches.config";
import * as RCollapsible from "@radix-ui/react-collapsible";

const StyledContent = styled(RCollapsible.CollapsibleContent, {
  padding: 10,
  marginTop: 10,
  backgroundColor: "gainsboro",
  borderRadius: 6
});

export const Collapsible = () => (
  <RCollapsible.Root>
    <RCollapsible.Button>Button</RCollapsible.Button>
    <StyledContent>Content 1</StyledContent>
  </RCollapsible.Root>
);
