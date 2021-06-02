import { Swatch } from "../Swatch";
import { styled } from "../../stitches.config";

const PaletteRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
});
const PaletteColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
});
const PaletteLabel = styled("span", {
  color: "$gray12",
  backgroundColor: "$whiteA8",
  fontSize: "$1",
  p: "0 $1",
  br: "$1"
});

export const Palette = () => {
  const myColors = [
    "gray",
    "mauve",
    "slate",
    "sage",
    "olive",
    "sand",
    "tomato",
    "red",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "indigo",
    "blue",
    "sky",
    "mint",
    "cyan",
    "teal",
    "green",
    "grass",
    "lime",
    "yellow",
    "amber",
    "orange",
    "brown",
    "bronze",
    "gold",
    "grayA",
    "mauveA",
    "slateA",
    "sageA",
    "oliveA",
    "sandA",
    "tomatoA",
    "redA",
    "crimsonA",
    "pinkA",
    "plumA",
    "purpleA",
    "violetA",
    "indigoA",
    "blueA",
    "skyA",
    "mintA",
    "cyanA",
    "tealA",
    "greenA",
    "grassA",
    "limeA",
    "yellowA",
    "amberA",
    "orangeA",
    "brownA",
    "bronzeA",
    "goldA",
    "whiteA",
    "blackA"
    // "grayDark",
    // "mauveDark",
    // "slateDark",
    // "sageDark",
    // "oliveDark",
    // "sandDark",
    // "tomatoDark",
    // "redDark",
    // "crimsonDark",
    // "pinkDark",
    // "plumDark",
    // "purpleDark",
    // "violetDark",
    // "indigoDark",
    // "blueDark",
    // "skyDark",
    // "mintDark",
    // "cyanDark",
    // "tealDark",
    // "greenDark",
    // "grassDark",
    // "limeDark",
    // "yellowDark",
    // "amberDark",
    // "orangeDark",
    // "brownDark",
    // "bronzeDark",
    // "goldDark",
    // "grayDarkA",
    // "mauveDarkA",
    // "slateDarkA",
    // "sageDarkA",
    // "oliveDarkA",
    // "sandDarkA",
    // "tomatoDarkA",
    // "redDarkA",
    // "crimsonDarkA",
    // "pinkDarkA",
    // "plumDarkA",
    // "purpleDarkA",
    // "violetDarkA",
    // "indigoDarkA",
    // "blueDarkA",
    // "skyDarkA",
    // "mintDarkA",
    // "cyanDarkA",
    // "tealDarkA",
    // "greenDarkA",
    // "grassDarkA",
    // "limeDarkA",
    // "yellowDarkA",
    // "amberDarkA",
    // "orangeDarkA",
    // "brownDarkA",
    // "bronzeDarkA",
    // "goldDarkA"
  ];
  const lightColours = myColors.map((color, index) => {
    const colourShades = [];
    for (let i = 1; i < 13; i++) {
      colourShades.push(
        <Swatch key={index} bgcolor={`$${color + i}`}>
          <PaletteLabel>{`${color + i}`}</PaletteLabel>
        </Swatch>
      );
    }
    return <PaletteRow>{colourShades}</PaletteRow>;
  });
  return <PaletteColumn>{lightColours}</PaletteColumn>;
};
