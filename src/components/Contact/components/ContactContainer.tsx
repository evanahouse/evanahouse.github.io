import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";
import { Container } from "@mui/material";

const ContactContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: PALETTE.bgTwo,
  minHeight: "100vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
}));

export default ContactContainer;
