import { styled } from "../../stitches.config";
import * as RScrollArea from "@radix-ui/react-scroll-area";

const { SCROLL_AREA_CSS_PROPS } = RScrollArea;

const StyledScrollArea = styled(RScrollArea.Root, {
  position: "relative",
  zIndex: 0,
  maxWidth: "100%",
  maxHeight: "100%",
  "& [data-radix-scroll-area-viewport-position]::-webkit-scrollbar": {
    display: "none"
  }
});

const StyledViewport = styled(RScrollArea.Viewport, {
  zIndex: 1,
  position: "relative"
});

const StyledScrollbarY = styled(RScrollArea.ScrollbarY, {
  zIndex: 2,
  position: "absolute",
  userSelect: "none",
  transition: "300ms opacity ease",
  width: 8,
  right: 0,
  top: 0,
  bottom: 0
});

const StyledTrack = styled(RScrollArea.Track, {
  zIndex: -1,
  position: "relative",
  width: "100%",
  height: "100%"
});

const StyledThumb = styled(RScrollArea.Thumb, {
  backgroundColor: "gainsboro",
  position: "absolute",
  top: 0,
  left: 0,
  userSelect: "none",
  borderRadius: 9999,
  willChange: `var(${SCROLL_AREA_CSS_PROPS.scrollbarThumbWillChange})`,
  height: `var(${SCROLL_AREA_CSS_PROPS.scrollbarThumbHeight})`,
  width: `var(${SCROLL_AREA_CSS_PROPS.scrollbarThumbWidth})`
});

export const ScrollArea = () => (
  <div style={{ height: 250 }}>
    <StyledScrollArea>
      <StyledViewport>
        <div
          style={{
            height: 1000,
            backgroundImage:
              "repeating-linear-gradient(0deg, dodgerblue, dodgerblue 10px, transparent 10px, transparent 20px)"
          }}
        />
      </StyledViewport>

      <StyledScrollbarY>
        <StyledTrack>
          <StyledThumb />
        </StyledTrack>
      </StyledScrollbarY>
    </StyledScrollArea>
  </div>
);
