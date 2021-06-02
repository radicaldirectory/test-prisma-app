import { styled } from "../../stitches.config";

const StyledSwatch = styled("div", {
  width: "$9",
  height: "$9",
  br: "$3",
  m: "$1",
  p: "$1",
  backgroundColor: "black"
});

export const Swatch = (props) => {
  return (
    <StyledSwatch css={{ backgroundColor: props.bgcolor }}>
      {props.children}
    </StyledSwatch>
  );
};
