import { Container, Paper, Typography } from "@mui/material";
import { SLIDES } from "../../constants/slides";
import useIsMobile from "../../hooks/useIsMobile";

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

        height: isMobile ? "60%" : "60%",
        width: isMobile ? "100%" : "50%",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, width: "100%" }}>
        {!isMobile && (
          <>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              App: ScatterBrainz
            </Typography>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              {"Screen: " + `"` + selectedSlide?.screen + `"`}
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
          {"Description: " + selectedSlide?.description}
        </Typography>
      </Paper>
    </Container>
  );
};

export default InfoContent;
