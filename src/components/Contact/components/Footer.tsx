import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Typography } from "@mui/material";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";
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
          justifyContent: "center",
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
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          pb: 2,
          pt: 2,
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
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Link
          to="https://www.linkedin.com/in/evanahouse/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <SocialButton
            sx={{
              width: isMobile ? 50 : 75,
              height: isMobile ? 50 : 75,
            }}
          >
            <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </SocialButton>
          <Link
            to="https://github.com/evanahouse"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <SocialButton
              sx={{
                width: isMobile ? 50 : 75,
                height: isMobile ? 50 : 75,
              }}
            >
              <GitHubIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
            </SocialButton>
          </Link>
        </Link>
        <Link
          to="https://evanahouse.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <SocialButton
            onClick={() => {}}
            sx={{
              width: isMobile ? 50 : 75,
              height: isMobile ? 50 : 75,
            }}
          >
            <BsMedium size={isMobile ? 30 : 40} />
          </SocialButton>
        </Link>
        <Link
          to="https://www.instagram.com/evanahouse/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <SocialButton
            onClick={() => {}}
            sx={{
              width: isMobile ? 50 : 75,
              height: isMobile ? 50 : 75,
            }}
          >
            <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </SocialButton>
        </Link>
      </Container>
    </Container>
  );
};
export default Footer;
