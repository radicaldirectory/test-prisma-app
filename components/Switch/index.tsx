import { styled } from "../../stitches.config";
import * as RSwitch from "@radix-ui/react-switch";

const StyledSwitch = styled(RSwitch.Root, {
  appearance: "none",
  border: "none",
  padding: 0,
  width: 25,
  height: 15,
  backgroundColor: "gainsboro",
  borderRadius: 25,
  position: "relative",
  "&:focus": {
    outline: "none",
    boxShadow: "0 0 0 2px royalblue"
  },
  '&[data-state="checked"]': {
    backgroundColor: "dodgerblue"
  }
});

const StyledThumb = styled(RSwitch.Thumb, {
  display: "block",
  width: 13,
  height: 13,
  backgroundColor: "white",
  borderRadius: "$round",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 2px",
  transition: "transform 100ms",
  transform: "translateX(1px)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(11px)"
  }
});

export const Switch = () => (
  <StyledSwitch>
    <StyledThumb />
  </StyledSwitch>
);
