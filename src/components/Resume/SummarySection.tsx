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
            fontSize: isMobile ? ".9rem" : "1.25rem",
          }}
        >
          Dynamic engineer skilled in both machine and human communication.
          Experienced full-stack developer specializing in React Native, with a
          proven track record of building cross-platform mobile applications
          using Expo from the ground up. Leveraging a Mechanical Engineering
          degree from Virginia Tech, I combine technical expertise with creative
          problem-solving. Known for crafting pixel-perfect frontends and
          integrating them with scalable backends, I collaborate seamlessly with
          backend teams to ensure cohesive system architecture and robust
          performance. Passionate about innovation and driven by a keen eye for
          design aesthetics, I am eager to contribute my expertise to React
          Native development projects and help organizations achieve new levels
          of success.
        </Typography>
      </Paper>
    </Container>
  );
};

export default SummarySection;
