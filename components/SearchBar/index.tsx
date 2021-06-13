import { styled } from "../../stitches.config";
import { Button } from "@components/Button";
import { GrFormSearch } from "react-icons/gr";

const StyledForm = styled("form", {
  display: "flex",
  margin: "0",
  alignItems: "center"
  //   flex: "1",
  //   margin: "0 10px",
  //   background: "$amber8"
});

const StyledSearchBar = styled("input", {
  //   borderWidth: "2px",
  //   borderStyle: "solid"
  flexBasis: "content",
  width: "100%",
  border: "none",
  //   padding: "2px 0px",
  marginLeft: "$1",
  "&:focus": {
    outline: "none",
    borderBottom: "2px solid black"
  }
  //   height: "100%"
});

const StyledMagnifyingGlass = styled(GrFormSearch, {
  transform: "scaleX(-1)",
  height: "$6",
  width: "$6",
  stroke: "black",
  strokeWidth: "2px"
});

export const SearchBar = () => {
  return (
    <StyledForm>
      <StyledSearchBar type="text" aria-role="search" />
      <Button content="icon" size="sm" type="ghost">
        <StyledMagnifyingGlass />
      </Button>
    </StyledForm>
  );
};
