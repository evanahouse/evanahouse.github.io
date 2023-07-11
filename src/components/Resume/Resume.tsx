import { Container, Typography } from "@mui/material";
import ScreenWrapper from "../../common/ScreenWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import Spacer from "../Contact/components/Spacer";
import MainActionButton from "../Home/components/MainActionButton";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

const Resume = () => {
  const { isMobile } = useIsMobile();

  return (
    <ScreenWrapper>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100%" : "100%",
        }}
      >
        <Spacer />
        <Spacer />
        <MainActionButton to={"/resume"} showButton={true}>
          Download Resume
        </MainActionButton>
        <Spacer />
        {/* <Typography variant="h6" align="center" gutterBottom>
          evanahouse@gmail.com | 203-206-8593 | New York, NY
        </Typography> */}
        <Spacer />
        <SummarySection />
        <Spacer />
        <ExperienceSection />
        <Spacer />
        <EducationSection />
        <Spacer />
        <SkillsSection />
        <Spacer />
        <Spacer />
      </Container>
    </ScreenWrapper>
  );
};

export default Resume;
