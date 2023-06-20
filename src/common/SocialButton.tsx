import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";
import { PALETTE } from "../constants/palette";

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

export default SocialButton;
