import { Container, Paper, Typography } from "@mui/material";
import { SLIDES } from "../../constants/slides";
import useIsMobile from "../../hooks/useIsMobile";
import Footer from "./Footer";

interface InfoContentProps {
  selectedApp: "scatterbrainz" | "onebook" | "othermind";
  activeSlideIndex: number;
}

const InfoContent = ({ selectedApp, activeSlideIndex }: InfoContentProps) => {
  const { isMobile } = useIsMobile();

  const selectedSlide = SLIDES[selectedApp][activeSlideIndex];

  return (
    <Container
      sx={{
        display: "flex",
        height: isMobile ? "60%" : "100%",
        width: isMobile ? "100%" : "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, width: "100%" }}>
        {!isMobile && (
          <>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              {selectedApp === "scatterbrainz" ? "ScatterBrainz" : "OneBook"}
            </Typography>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              {`"` + selectedSlide?.screen + `"`}
            </Typography>
          </>
        )}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.5rem",
          }}
          gutterBottom
        >
          {selectedSlide?.description}
        </Typography>
      </Paper>
      <Footer selectedApp={selectedApp} />
    </Container>
  );
};

export default InfoContent;
