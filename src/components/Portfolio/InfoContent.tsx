import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SocialButton from "../../common/SocialButton";
import useIsMobile from "../../hooks/useIsMobile";

interface InfoContentProps {
  selectedApp: "scatterbrainz" | "onebook" | "othermind";
}

const InfoContent = ({selectedApp}: InfoContentProps) => {
  const { isMobile } = useIsMobile();

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
              Screen: "Time To Eat"
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
          Description: Here is a brief description of the screen.
        </Typography>
      </Paper>
    </Container>
  );
};

export default InfoContent;
