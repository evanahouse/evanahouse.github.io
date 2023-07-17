import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

import { Container, Typography } from "@mui/material";
import SocialButton from "../../../common/SocialButton";
import SocialButtonRow from "../../../common/SocialButtonRow";
import useIsMobile from "../../../hooks/useIsMobile";

const Footer = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        mt: isMobile ? 1 : 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          pb: isMobile ? 1 : 2,
          pt: isMobile ? 1 : 2,
        }}
      >
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
          }}
        >
          <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
            textAlign: "center",
          }}
        >
          evanahouse@gmail.com
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          pb: isMobile ? 0 : 2,
          pt: isMobile ? 0 : 2,
        }}
      >
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
          }}
        >
          <HomeIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.2rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
            textAlign: "center",
          }}
        >
          Seattle, WA | New York, NY
        </Typography>
      </Container>
      {/* SOCIAL BUTTONS */}
      {!isMobile && <SocialButtonRow />}
    </Container>
  );
};
export default Footer;
