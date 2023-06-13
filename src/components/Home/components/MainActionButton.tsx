import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { PALETTE } from "../../../constants/palette";
import useIsMobile from "../../../hooks/useIsMobile";

interface StyledButtonProps {
  showButton: boolean;
  to?: string | undefined;
  children?: React.ReactNode;
}

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: "left",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  opacity: 0,
  transition: "opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
  backgroundColor: PALETTE.bgOne,
  typography: "h1",
  "&:hover": {
    backgroundColor: PALETTE.bgThree,
    color: PALETTE.bgTwo,
  },
}));
const MainActionButton = ({ showButton, to, children }: StyledButtonProps) => {
  const { isMobile } = useIsMobile();
  const navigate = useNavigate();

  return (
    <StyledButton
      variant="contained"
      onClick={() => {
        navigate(to || "/");
      }}
      sx={{
        opacity: showButton ? 1 : 0,
        typography: isMobile ? "h6" : "h3",
        mt: isMobile ? 0 : 0,
        mb: isMobile ? 0 : 0,
      }}
    >
      {children}
    </StyledButton>
  );
};

export default MainActionButton;
