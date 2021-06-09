import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  cursor: "pointer",
  padding: "0.25rem 0.5rem",
  // textTransform: "uppercase",
  fontWeight: "900",
  letterSpacing: "0.1em",

  "+ button": {
    marginLeft: "1rem"
  },
  "@:hover": {
    backgroundColor: "white",
    color: "black"
  },

  variants: {
    type: {
      solid: {
        background: "black",
        color: "white",
        border: "none"
      },
      outline: {
        background: "white",
        color: "black",
        border: "2px solid black"
      },
      ghost: {
        background: "white",
        color: "black",
        border: "none"
      },
      link: {}
    },
    size: {
      sm: {
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5"
      },
      md: {
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6"
      },
      lg: {
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7"
      }
    }
  },
  defaultVariants: {
    size: "md",
    type: "outline"
  }
});

export const Button = (props) => {
  return <StyledButton {...props} />;
};
