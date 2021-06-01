import { styled } from "../../stitches.config";
import * as RCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const StyledCheckbox = styled(RCheckbox.Root, {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  boxShadow: "inset 0 0 0 1px gainsboro",
  width: 15,
  height: 15,
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:focus": {
    outline: "none",
    boxShadow: "inset 0 0 0 1px dodgerblue, 0 0 0 1px dodgerblue"
  }
});

export const Checkbox = () => {
  return (
    <StyledCheckbox defaultChecked>
      <RCheckbox.Indicator as={CheckIcon} />
    </StyledCheckbox>
  );
};
