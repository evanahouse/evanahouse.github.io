import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";

const RowContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
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
  return (
    <RowContainer>
      <SocialButton>
        <EmailIcon sx={{ fontSize: 40 }} />
      </SocialButton>
      <SocialButton>
        <LinkedInIcon sx={{ fontSize: 40 }} />
      </SocialButton>
      <SocialButton>
        <InstagramIcon sx={{ fontSize: 40 }} />
      </SocialButton>
    </RowContainer>
  );
};

export default Footer;
