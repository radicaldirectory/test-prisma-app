import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  cursor: "pointer",

  // textTransform: "uppercase",
  fontWeight: "900",
  letterSpacing: "0.1em",

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
    content: {
      text: {
        padding: "0.25rem 0.5rem",
        "+ button": {
          marginLeft: "1rem"
        }
      },
      icon: { padding: "0" },
      textIcon: {},
      iconText: {}
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
  const buttonType = props.submit ? "type='submit'" : "type='button'";
  return <StyledButton {...buttonType} {...props} />;
};
