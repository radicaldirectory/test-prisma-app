import * as BaseDialog from "@radix-ui/react-dialog";
import { styled } from "../../stitches.config";

const StyledOverlay = styled(BaseDialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
});

const StyledContent = styled(BaseDialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  padding: 20,
  marginTop: "-5vh",
  backgroundColor: "white",
  borderRadius: 6,

  "&:focus": {
    outline: "none"
  }
});

export const Dialog = () => (
  <BaseDialog.Root>
    <BaseDialog.Trigger>Open</BaseDialog.Trigger>
    <StyledOverlay />
    <StyledContent>
      <p>BaseDialog content</p>
      <BaseDialog.Close>Close</BaseDialog.Close>
    </StyledContent>
  </BaseDialog.Root>
);
