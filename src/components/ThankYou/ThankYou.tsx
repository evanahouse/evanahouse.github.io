import { Box, Container, Typography } from "@mui/material";
import backgroundImage from "../../assets/images/logoReversed.png";
import ScreenWrapper from "../../common/ScreenWrapper";
import useIsMobile from "../../hooks/useIsMobile";
import MainActionButton from "../Home/components/MainActionButton";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "20px",
    borderRadius: "8px",
  },
};

const ThankYou = () => {
  const { isMobile } = useIsMobile();

  return (
    <ScreenWrapper>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "repeat",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          backgroundSize:isMobile ? "contain" : "auto",
        }}
      >
        <Container maxWidth="sm" sx={styles.container}>
          <Box sx={styles.content}>
            <Typography variant={isMobile ? "h6" : "h3"
            } component="h1" align="center" gutterBottom>
              Thank you for your message!
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              align="center"
              gutterBottom
              sx={{
                mb: 2,
              }}
            >
              I will get back to you as soon as possible.
            </Typography>
            <MainActionButton to={"/"} showButton={true}>
              Return Home
            </MainActionButton>
          </Box>
        </Container>
      </Box>
    </ScreenWrapper>
  );
};

export default ThankYou;
