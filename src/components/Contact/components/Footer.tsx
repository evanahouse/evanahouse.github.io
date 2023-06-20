import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Typography } from "@mui/material";
import SocialButton from "../../../common/SocialButton";
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
        mt: 4,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignSelf: "center",
          alignItems: "center",
          pb: 2,
        }}
      >
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
          <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <Typography
          variant="h5"
          sx={{
            fontSize: "clamp(1rem, 3vw, 2rem)",
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
          justifyContent: "flex-start",
          alignSelf: "center",
          alignItems: "center",
          pb: 2,
        }}
      >
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
          <HomeIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <Typography
          variant="h5"
          sx={{
            fontSize: "clamp(1rem, 3vw, 2rem)",
            textAlign: "center",
          }}
        >
          Seattle, WA | New York, NY
        </Typography>
      </Container>
      {/* SOCIAL BUTTONS */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
          <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
          <GitHubIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
          <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
        <SocialButton
          onClick={() => {}}
          sx={{
            width: isMobile ? 50 : 75,
            height: isMobile ? 50 : 75,
          }}
        >
        </SocialButton>
      </Container>
    </Container>
  );
};
export default Footer;
