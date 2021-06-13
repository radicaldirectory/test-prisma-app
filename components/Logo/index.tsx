import { styled } from "../../stitches.config";

const LogoContainer = styled("div", {
  //   background: "$yellow8",
  borderRight: "2px solid black",
  maxHeight: "2rem",
  textAlign: "center"
});

const StyledLogo = styled("h1", {
  display: "flex",
  justifyContent: "center",
  fontFamily: "viksjo",
  minWidth: "3ch",
  //   flex: "1",
  //   padding: "0.5rem",
  "& .emoji-logo": {
    display: "none",
    "& .emoji": {
      fontSize: "1.4rem"
      //       position: "absolute",
    }
  },
  "&:hover": {
    "& .logo": {
      display: "none"
    },
    "& .emoji-logo": {
      display: "flex",
      alignItems: "center"
    }
  }
});

export const Logo = () => {
  return (
    <LogoContainer>
      <StyledLogo>
        <span className="logo">R.D</span>
        <span className="emoji-logo">
          <span className="emoji">🔥</span>.<span className="emoji">🌱</span>
        </span>
      </StyledLogo>
    </LogoContainer>
  );
};
