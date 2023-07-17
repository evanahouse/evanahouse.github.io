import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import LoadingModal from "../../common/LoadingModal";
import ScreenWrapper from "../../common/ScreenWrapper";
import Spacer from "../../common/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import Navbar from "../Navbar/Navbar";
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
      <Navbar />
      <LoadingModal loading={loading} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Spacer />
        <Spacer />
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            width: "100%",
            padding: 2
          }}
        >
        <DownloadResumeButton />
        </Container>
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
