import { Container, Paper, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

const SkillsSection = () => {
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
          Skills
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? "0.9rem" : "1.25rem",
          }}
        >
          React Native, React.js, Expo, TypeScript, JavaScript, Auth0, Supabase, Firebase, Google
          Cloud Platform, Hasura, Redux, Zustand, Node.js, React Query, GraphQL,
          Xcode, Android Studio, RESTful APIs, Git, Ruby on Rails, C, C++, R, G,
          Figma, Adobe Creative Suite, Jira, Trello, Stripe
        </Typography>
      </Paper>
    </Container>
  );
};

export default SkillsSection;
