import { Container, Paper, Typography } from "@mui/material";
import Spacer from "../../common/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import EducationItem from "./EducationItem";

const EducationSection = () => {
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
          Education
        </Typography>
        <EducationItem
          title="Bachelor of Science, Mechanical Engineering"
          subtitle="Virginia Tech, Blacksburg, VA"
          timeline="August 2012 - May 2016"
        />
        <Spacer />
        <EducationItem
          title="Software Engineering, Full-Stack"
          subtitle="Flatiron School, Seattle, WA"
          timeline="January 2021 - June 2021"
        />
      </Paper>
    </Container>
  );
};

export default EducationSection;
