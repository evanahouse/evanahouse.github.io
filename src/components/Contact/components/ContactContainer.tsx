import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";

const ContactContainer = styled(Container)(({ theme }) => ({
  // paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: PALETTE.bgTwo,
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "row",
}));

export default ContactContainer;
