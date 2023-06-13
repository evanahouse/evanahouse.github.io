import { Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ScreenWrapper from "../../common/ScreenWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import Footer from "./components/Footer";
import HomeContainer from "./components/HomeContainer";
import MainActionButton from "./components/MainActionButton";
import ProfilePhoto from "./components/ProfilePhoto";

const Home = () => {
  const el = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const { isMobile } = useIsMobile();


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, my name is EVAN HOUSE. I make mobile apps with React Native and Expo. Check out my recent work.",
      ],
      startDelay: 200,
      typeSpeed: 25,
      backSpeed: 100,
      backDelay: 1000,
      smartBackspace: true,
      loop: false,
      showCursor: false,
      cursorChar: "!",
      onComplete: () => {
        setShowButton(true);
      },
    });

    // Pause typing when the button is shown
    if (showButton) {
      typed.stop();
    }

    return () => {
      typed.destroy();
    };
  },[]);

  return (
    <ScreenWrapper
      sx={{
        justifyContent: isMobile ? "center" : "center",
      }}
    >
      <HomeContainer
        maxWidth="xl"
        sx={{
          flexDirection: isMobile ? "column" : "row",
          pt: isMobile ? 5 : 10,
        }}
      >
        <ProfilePhoto />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: isMobile ? 0 : 5,
            width: isMobile ? "100%" : "100%",
          }}
        >
          <Typography
            ref={el}
            variant={isMobile ? "h6" : "h2"}
            align="left"
            sx={{
              pb: isMobile ? 2 : 5,
              alignSelf: "center",
              width: isMobile ? "75%" : "100%",
            }}
          />
          <MainActionButton to={"/portfolio"} showButton={showButton}>
            View Portfolio
          </MainActionButton>
          <Typography
            variant={isMobile ? "h6" : "h2"}
            align="center"
            sx={{ opacity: showButton ? 1 : 0 }}
          >
            or
          </Typography>
          <MainActionButton to={"/resume"} showButton={showButton}>
            Download Resume
          </MainActionButton>
        </Container>
      </HomeContainer>
      <Footer />
    </ScreenWrapper>
  );
};

export default Home;
