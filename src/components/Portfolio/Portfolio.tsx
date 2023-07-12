import SwiperCore, {
  A11y,
  EffectCoverflow,
  EffectCube,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

import { Container } from "@mui/material";
// import "swiper/css/effect-cards";
import { useState } from "react";
import "swiper/swiper-bundle.css";
import ScreenWrapper from "../../common/ScreenWrapper";
import Spacer from "../../common/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import InfoContent from "./InfoContent";
import MediaContent from "./MediaContent";
import PortfolioContainer from "./PortfolioContainer";
import ToggleAppButtons from "./ToggleAppButtons";

const Portfolio = () => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCube,
    EffectCoverflow,
    Keyboard,
  ]);
  const { isMobile } = useIsMobile();
  const [selectedApp, setSelectedApp] = useState("scatterbrainz");

  const handleAppChange = (event: any, newApp: string) => {
    setSelectedApp(newApp);
  };

  return (
    <ScreenWrapper
      sx={{
        flexDirection: "row",
      }}
    >
      <PortfolioContainer
        maxWidth="xl"
        sx={{
          flexDirection: "column",
          height: isMobile ? "100%" : "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: isMobile ? 2 : 10,
        }}
      >
        <ToggleAppButtons
          selectedApp={selectedApp}
          handleAppChange={handleAppChange}
        />
        {!isMobile && (
          <>
            <Spacer />
            <Spacer />
            <Spacer />
          </>
        )}
        <Container
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column-reverse" : "row",
            justifyContent: isMobile ? "flex-start" : "space-between",
          }}
        >
          <MediaContent />
          {isMobile && <Spacer />}
          <InfoContent />
        </Container>
      </PortfolioContainer>
    </ScreenWrapper>
  );
};

export default Portfolio;
