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
import Footer from "./Footer";
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
  const [selectedApp, setSelectedApp] = useState<
    "scatterbrainz" | "othermind" | "onebook"
  >("scatterbrainz");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);

  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  const handleAppChange = (
    event: any,
    newApp: "scatterbrainz" | "onebook" | "othermind"
  ) => {
    setSelectedApp(newApp);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  console.log("activeSlideIndex", activeSlideIndex);
  return (
    <ScreenWrapper
      sx={{
        flexDirection: "row",
      }}
    >
      {/* <LoadingModal loading={loading} /> */}

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
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "flex-start" : "space-between",
            width: "100%",
          }}
        >
          <MediaContent
            onSlideChange={handleSlideChange}
            selectedApp={selectedApp}
          />
          {isMobile && <Spacer />}
          <InfoContent
            selectedApp={selectedApp}
            activeSlideIndex={activeSlideIndex}
          />
        </Container>
        <Spacer />
        <Footer selectedApp={selectedApp} />
      </PortfolioContainer>
    </ScreenWrapper>
  );
};

export default Portfolio;
