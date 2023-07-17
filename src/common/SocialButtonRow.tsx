import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/material";
import { BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import SocialButton from "./SocialButton";

const SocialButtonRow = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        mt: 2,
        pt: isMobile ? 2 : 0,
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
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
          }}
        >
          <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
      <Link
        to="https://github.com/evanahouse"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <SocialButton
          sx={{
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
          }}
        >
          <GitHubIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
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
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
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
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
          }}
        >
          <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
    </Container>
  );
};

export default SocialButtonRow;
