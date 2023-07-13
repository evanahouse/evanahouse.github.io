import { Container, Paper, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

const SummarySection = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: isMobile ? "100%" : "100%",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant={isMobile ? "h6" : "h4"} gutterBottom>
          Summary
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile? ".9rem": "1.25rem",
          }}
        >
          Dynamic engineer adept at both machine and personal communication.
          Seasoned full-stack developer with a specialty in React Native,
          leveraging Expo to create remarkable, cross-platform mobile
          applications from scratch. With a solid background in Mechanical
          Engineering from Virginia Tech, I bring a unique blend of technical
          expertise and creative problem-solving skills. Meticulous in ensuring
          pixel-perfect frontends and seamlessly integrating them with scalable
          Firebase backends, I consistently deliver exceptional user
          experiences. Passionate about innovation and driven by a keen eye for
          design aesthetics, I am actively seeking opportunities in React Native
          development to contribute my expertise and propel organizations to new
          heights.
        </Typography>
      </Paper>
    </Container>
  );
};

export default SummarySection;
