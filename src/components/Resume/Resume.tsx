import { Container } from "@mui/material";
import ScreenWrapper from "../../common/ScreenWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import Spacer from "../Contact/components/Spacer";
import MainActionButton from "../Home/components/MainActionButton";
import DownloadResumeButton from "./DownloadResumeButton";
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
        }}
      >
        <Spacer />
        <Spacer />
        <DownloadResumeButton />
        <Spacer />
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
