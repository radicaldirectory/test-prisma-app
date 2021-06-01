import * as BasePopover from "@radix-ui/react-popover";
import { styled } from "../../stitches.config";

const StyledContent = styled(BasePopover.Content, {
  borderRadius: 3,
  padding: "20px",
  fontSize: 14,
  backgroundColor: "gainsboro",
  color: "black"
});

const StyledArrow = styled(BasePopover.Arrow, {
  fill: "gainsboro"
});

export const Popover = () => (
  <BasePopover.Root>
    <BasePopover.Trigger>Trigger</BasePopover.Trigger>
    <StyledContent>
      <h3>BasePopover content</h3>
      <p>Are you sure you wanna do this?</p>
      <BasePopover.Close>Yes</BasePopover.Close>
      <StyledArrow />
    </StyledContent>
  </BasePopover.Root>
);
