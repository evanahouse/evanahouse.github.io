import { Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import LoadingModal from "../../common/LoadingModal";
import ScreenWrapper from "../../common/ScreenWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import Navbar from "../Navbar/Navbar";
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
    <ScreenWrapper>
      <Navbar />
      <LoadingModal loading={loading} />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flex: 1,
        }}
      >
        <HomeContainer
          maxWidth="xl"
          sx={{
            flexDirection: isMobile ? "column" : "row",
            // pt: isMobile ? 5 : 10,
            height: isMobile ? "100%" : "100%",
          }}
        >
          <ProfilePhoto />
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: isMobile ? 0 : 5,
              width: isMobile ? "100%" : "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: isMobile ? "100%" : "100%",
                height: isMobile ? 150 : "auto",
              }}
            >
              <Typography
                ref={el}
                variant={isMobile ? "h6" : "h3"}
                align="left"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.7rem",
                    md: "1.7rem",
                    lg: "2.5rem",
                    xl: "2.5rem",
                  },
                  pb: isMobile ? 2 : 5,
                  alignSelf: "center",
                  width: isMobile ? "100%" : "100%",
                }}
              />
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MainActionButton to={"/portfolio"} showButton={showButton}>
                View Portfolio
              </MainActionButton>
              <Typography
                variant={isMobile ? "h6" : "h4"}
                align="center"
                sx={{ opacity: showButton ? 1 : 0 }}
              >
                or
              </Typography>
              <MainActionButton to={"/resume"} showButton={showButton}>
                Download Resume
              </MainActionButton>
            </Container>
          </Container>
        </HomeContainer>
        {isMobile && <Footer />}
        {!isMobile && <Footer />}
      </Container>
    </ScreenWrapper>
  );
};

export default Home;
