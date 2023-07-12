import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingModal from "../../common/LoadingModal";
import ScreenWrapper from "../../common/ScreenWrapper";
import Spacer from "../../common/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import DownloadResumeButton from "./DownloadResumeButton";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";

const Resume = () => {
  const { isMobile } = useIsMobile();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <LoadingModal loading={loading} />
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
