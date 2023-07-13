import { Container, Typography } from "@mui/material";
// import "swiper/css/effect-cards";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import SocialButton from "../../common/SocialButton";
import { STORE_LINKS } from "../../constants/storeLinks";
import useIsMobile from "../../hooks/useIsMobile";

interface FooterProps {
  selectedApp: "scatterbrainz" | "onebook" | "othermind";
}
const Footer = ({ selectedApp }: FooterProps) => {
  const { isMobile } = useIsMobile();

   const appStoreLink = STORE_LINKS[selectedApp]?.ios;
   const googlePlayLink = STORE_LINKS[selectedApp]?.google;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        //show at bottom of container
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: isMobile ? "1rem" : "2.0rem",
          marginRight: 2,
        }}
      >
        DOWNLOAD:
      </Typography>
      <Link
        to={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <SocialButton
          sx={{
            width: isMobile ? 50 : 100,
            height: isMobile ? 50 : 100,
          }}
        >
          <AppleIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
      <Link
        to={googlePlayLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <SocialButton
          sx={{
            width: isMobile ? 50 : 100,
            height: isMobile ? 50 : 100,
          }}
        >
          <GoogleIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
    </Container>
  );
};

export default Footer;
