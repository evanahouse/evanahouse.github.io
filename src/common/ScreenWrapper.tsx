import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { PALETTE } from "../constants/palette";

const ScreenWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: PALETTE.bgTwo,
  minHeight: "100vh",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
}));

export default ScreenWrapper;
