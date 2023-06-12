import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { PALETTE } from "../../constants/palette";
import Footer from "./components/Footer";
import MainActionButton from "./components/MainActionButton";
import ProfilePhoto from "./components/ProfilePhoto";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: PALETTE.bgTwo,
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: PALETTE.bgTwo,
  // height: "100vh",
  alignItems: "start",
  justifyContent: "center",
  display: "flex",
  
}));

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const el = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, my name is Evan House. I make mobile apps with React Native and Expo. Check out my recent work.",
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
  }, []);

  return (
    <Wrapper>
      <StyledContainer maxWidth="xl" >
        <ProfilePhoto />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 5,
          }}
        >
          <Typography ref={el} variant={isMobile ? "h6" : "h2"} align="left" />
          <MainActionButton showButton={showButton}>
            View Portfolio
          </MainActionButton>
          <Typography
            variant={isMobile ? "h6" : "h2"}
            align="center"
            sx={{ opacity: showButton ? 1 : 0 }}
          >
            - or -
          </Typography>
          <MainActionButton showButton={showButton}>
            Download Resume
          </MainActionButton>
        </Container>
      </StyledContainer>
      <Footer />
    </Wrapper>
  );
};

export default Home;
