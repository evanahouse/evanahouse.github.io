import { Container, Paper, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

const InfoContent = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",

        height: isMobile ? "60%" : "60%",
        width: isMobile ? "100%" : "50%",
        // backgroundColor: "red",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, width: "100%" }}>
        {!isMobile && (
          <>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              App: ScatterBrainz
            </Typography>
            <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
              Screen: "Time To Eat"
            </Typography>
          </>
        )}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? "1rem" : "1.5rem",
          }}
        >
          Description: Here is a brief description of the screen.
        </Typography>
      </Paper>
    </Container>
  );
};

export default InfoContent;
