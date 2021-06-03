import { styled } from "../../stitches.config";

const StyledButton = styled("button", {
  cursor: "pointer",
  background: "#ececec",
  border: "1px solid black",
  borderRadius: "0.125rem",
  padding: "0.25rem 0.5rem",

  "+ button": {
    marginLeft: "1rem"
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5"
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6"
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7"
      }
    }
  }
});

export const Button = (props) => {
  return <StyledButton {...props} />;
};
