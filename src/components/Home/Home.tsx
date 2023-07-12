import { Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LoadingModal from "../../common/LoadingModal";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const typedOptions = {
      strings: [
        "Hi, my name is EVAN HOUSE. I make mobile apps with React Native and Expo. Check out my recent work.",
      ],
      startDelay: 0,
      typeSpeed: 5,
      backSpeed: 100,
      backDelay: 1000,
      smartBackspace: true,
      loop: false,
      showCursor: false,
      cursorChar: "!",
      onComplete: () => {
        setShowButton(true);
      },
    };
    if (el.current) {
  

      const typed = new Typed(el.current, typedOptions);

      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

 

  return (
    <ScreenWrapper
      sx={{
        justifyContent: isMobile ? "center" : "center",
      }}
    >
      <LoadingModal loading={loading} />
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
            variant={isMobile ? "h6" : "h3"}
            align="left"
            sx={{
              pb: isMobile ? 2 : 5,
              alignSelf: "center",
              width: isMobile ? "75%" : "100%",
            }}
          />
          <>
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
          </>
        </Container>
      </HomeContainer>
      <Footer />
    </ScreenWrapper>
  );
};

export default Home;
