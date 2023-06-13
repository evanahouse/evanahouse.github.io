import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";
import useIsMobile from "../../../hooks/useIsMobile";

const RowContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
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

  return (
    <RowContainer sx={{
      height: isMobile ? 50 : 100,
    }}>
      <SocialButton
        sx={{
          width: isMobile ? 50 : 100,
          height: isMobile ? 50 : 100,
        }}
      >
        <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
      </SocialButton>
      <SocialButton
        sx={{
          width: isMobile ? 50 : 100,
          height: isMobile ? 50 : 100,
        }}
      >
        <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
      </SocialButton>
      <SocialButton
        sx={{
          width: isMobile ? 50 : 100,
          height: isMobile ? 50 : 100,
        }}
      >
        <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
      </SocialButton>
    </RowContainer>
  );
};

export default Footer;
