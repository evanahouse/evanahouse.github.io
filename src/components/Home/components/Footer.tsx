import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { PALETTE } from "../../../constants/palette";
import useIsMobile from "../../../hooks/useIsMobile";

const RowContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingBottom: theme.spacing(2),
  alignItems: "center",
  alignSelf: "center",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: 100,
  height: 100,
  backgroundColor: PALETTE.bgOne,
  color: PALETTE.bgThree,
  "&:hover": {
    backgroundColor: PALETTE.bgThree,
    color: PALETTE.bgOne,
  },
}));

const Footer = () => {
  const { isMobile } = useIsMobile();
  const navigate = useNavigate();

  return (
    <RowContainer
      sx={{
        height: isMobile ? 100 : 100,
        backgroundColor: PALETTE.bgTwo,
        justifyContent: "center",
        alignItems: "flex-end",
        display: "flex",
        p: isMobile ? 2 : 2,
        flex: 0.1,
      }}
    >
      <SocialButton
        onClick={() => {
          navigate("/contact");
        }}
        sx={{
          width: isMobile ? 50 : 100,
          height: isMobile ? 50 : 100,
        }}
      >
        <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
      </SocialButton>
      <Link
        to="https://www.linkedin.com/in/evanahouse/"
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
          <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
      <Link
        to="https://www.instagram.com/evanahouse/"
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
          <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
        </SocialButton>
      </Link>
    </RowContainer>
  );
};

export default Footer;
