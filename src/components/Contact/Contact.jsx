import { Spa } from "@mui/icons-material";
import ScreenWrapper from "../../common/ScreenWrapper";
import { PALETTE } from "../../constants/palette";
import ContactContainer from "./components/ContactContainer";
import ContactForm from "./components/ContactForm";
import { Container, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";


const Contact = () => {
  const { isMobile } = useIsMobile();

  return (
    <ScreenWrapper>
      <ContactContainer maxWidth="xl" sx={{
        flexDirection: isMobile ? "column-reverse" : "row",
      }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",

            backgroundColor: PALETTE.bgOne,
          }}
        />
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
          <Typography
            variant="h2"
            sx={{
              color: PALETTE.primary,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "clamp(2rem, 5vw, 4rem)",
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: PALETTE.primary,
              fontSize: "clamp(1rem, 3vw, 2rem)",
              fontWeight: "bold",
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
        </Container>
      </ContactContainer>
    </ScreenWrapper>
  );
};

export default Contact;
