import { Spa } from "@mui/icons-material";
import ScreenWrapper from "../../common/ScreenWrapper";
import { PALETTE } from "../../constants/palette";
import ContactContainer from "./components/ContactContainer";
import ContactForm from "./components/ContactForm";
import { Container, Typography, IconButton } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import ProfilePhoto from "./components/ProfilePhoto";
import { styled } from "@mui/system";
import Footer from "./components/Footer";
import SocialButtonRow from "../../common/SocialButtonRow";
import LoadingModal from "../../common/LoadingModal";
import { useEffect, useState } from "react";

const Contact = () => {
  const { isMobile } = useIsMobile();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <LoadingModal loading={loading} />
      <ContactContainer
        maxWidth="xl"
        sx={{
          flexDirection: isMobile ? "column-reverse" : "row",
          pt: isMobile ? "clamp(1rem, 3vw, 2rem)" : "clamp(2rem, 3vw, 2rem)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            pt: isMobile ? "clamp(1rem, 3vw, 2rem)" : "clamp(2rem, 3vw, 2rem)",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              color: PALETTE.primary,
              textAlign: "center",
              marginTop: isMobile
                ? "clamp(1rem, 3vw, 2rem)"
                : "clamp(2rem, 3vw, 2rem)",
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: PALETTE.primary,
              fontSize: "clamp(1rem, 3vw, 2rem)",
              textAlign: "center",
              marginTop: "clamp(1rem, 3vw, 2rem)",
              pb: "clamp(1rem, 3vw, 2rem)",
            }}
          >
            Thank you for visiting! I'd love to hear from you. Please fill out
            the form below to connect. I'll usually get back to you within 24
            hours.
          </Typography>

          <ContactForm />
          {isMobile && <SocialButtonRow />}
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProfilePhoto />
          <Footer />
        </Container>
      </ContactContainer>
    </ScreenWrapper>
  );
};

export default Contact;
