import { Button } from "@components/Button";
import { FiMenu } from "react-icons/fi";
import { styled } from "../../stitches.config";

const MenuButtonContainer = styled("div", {
  borderLeft: "2px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&:hover": {
    background: "black",
    "& button": {
      background: "black"
    },
    "& svg": {
      stroke: "white"
    }
  }
});

const MenuIcon = styled(FiMenu, {
  stroke: "black",
  strokeWidth: "2.5px",
  strokeLinecap: "square",
  width: "$5",
  height: "$5"
});

export const MenuButton = () => {
  return (
    <MenuButtonContainer>
      <Button content="icon" size="sm" type="ghost">
        <MenuIcon />
      </Button>
    </MenuButtonContainer>
  );
};
