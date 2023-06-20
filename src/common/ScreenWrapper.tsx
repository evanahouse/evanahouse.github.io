import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { PALETTE } from "../constants/palette";

const ScreenWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: PALETTE.bgTwo,
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export default ScreenWrapper;
