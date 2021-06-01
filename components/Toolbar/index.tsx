import { styled, CSS } from "../../stitches.config";
import * as RToolbar from "@radix-ui/react-toolbar";

const StyledToolbar = styled(RToolbar.Root, {
  display: "flex"
});

const itemStyles: CSS = {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  padding: "5px 10px",
  margin: "0 1px",
  boxShadow: "inset 0 0 0 1px gainsboro",
  overflow: "hidden",
  borderRadius: 3,
  fontSize: 13,

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue"
  }
};

const StyledButton = styled(RToolbar.Button, itemStyles);

const StyledLink = styled(RToolbar.Link, {
  ...itemStyles,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center"
});

const StyledSeparator = styled(RToolbar.Separator, {
  width: 1,
  margin: 5,
  backgroundColor: "gainsboro"
});

const StyledToggleItem = styled(RToolbar.ToggleItem, {
  ...itemStyles,
  "&[data-state=on]": {
    backgroundColor: "gainsboro"
  }
});

export const Toolbar = () => (
  <StyledToolbar>
    <StyledButton>Action 1</StyledButton>
    <StyledButton>Action 2</StyledButton>
    <StyledSeparator />
    <StyledLink href="https://modulz.app" target="_blank">
      Link
    </StyledLink>
    <StyledSeparator />
    <RToolbar.ToggleGroup type="single" defaultValue="center">
      <StyledToggleItem value="left">Left</StyledToggleItem>
      <StyledToggleItem value="center">Center</StyledToggleItem>
      <StyledToggleItem value="right">Right</StyledToggleItem>
    </RToolbar.ToggleGroup>
  </StyledToolbar>
);
