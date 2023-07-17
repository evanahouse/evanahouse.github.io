import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";
import { Container } from "@mui/material";

const ContactContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  backgroundColor: PALETTE.bgTwo,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flex: 1
}));

export default ContactContainer;
