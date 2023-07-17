import { styled } from "@mui/system";
import { PALETTE } from "../../../constants/palette";
import { Container } from "@mui/material";

const HomeContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  backgroundColor: PALETTE.bgTwo,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",

  display: "flex",
  height: "100%",
}));

export default HomeContainer;
