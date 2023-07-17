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
import Navbar from "../Navbar/Navbar";
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
    setActiveSlideIndex(0);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  console.log("activeSlideIndex", activeSlideIndex);
  return (
    <ScreenWrapper sx={{}}>
      <Navbar />
      {/* <LoadingModal loading={loading} /> */}

      <PortfolioContainer
        maxWidth="xl"
        sx={{
          flexDirection: "column",
          height: isMobile ? "100%" : "100%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: isMobile ? 2 : 2,
          flex: 1,
        }}
      >
        <ToggleAppButtons
          selectedApp={selectedApp}
          handleAppChange={handleAppChange}
        />

        <Container
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "flex-start" : "flex-start",
            width: "100%",
            flex: 1,
            pt:1
          }}
        >
          <MediaContent
            onSlideChange={handleSlideChange}
            selectedApp={selectedApp}
          />
          {isMobile && <Spacer />}
          <Container
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <InfoContent
              selectedApp={selectedApp}
              activeSlideIndex={activeSlideIndex}
            />
            {/* <Spacer />
            <Footer selectedApp={selectedApp} /> */}
          </Container>
        </Container>
        <Spacer />
      </PortfolioContainer>
    </ScreenWrapper>
  );
};

export default Portfolio;
