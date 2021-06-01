import { styled } from "../../stitches.config";
import * as RSeparator from "@radix-ui/react-separator";

const StyledSeparator = styled(RSeparator.Root, {
  backgroundColor: "gainsboro",
  height: 1,
  margin: "20px 0"
});

export const Separator = () => <StyledSeparator />;
