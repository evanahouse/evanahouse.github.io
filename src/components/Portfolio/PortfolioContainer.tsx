import { Container } from "@mui/material";
import { styled } from "@mui/system";
import { PALETTE } from "../../constants/palette";

const PortfolioContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
  backgroundColor: PALETTE.bgTwo,
//   alignItems: "center",
//   justifyContent: "center",
  display: "flex",
  height: "100%",
  
}));

export default PortfolioContainer;
