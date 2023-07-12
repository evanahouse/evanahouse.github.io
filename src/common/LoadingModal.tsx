import { Backdrop, Box, LinearProgress, Modal } from "@mui/material";
import logo from "../assets/images/logoReversed.png";
import { PALETTE } from "../constants/palette";
import Spacer from "./Spacer";
interface LoadingModalProps {
  loading: boolean;
}

const LoadingModal = ({ loading }: LoadingModalProps) => {
  return (
    <Modal
      open={loading}
      onClose={() => {}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: PALETTE.bgTwo,
          flexDirection: "column",
        }}
      >
        <Box component="a" href="/">
          <Box
            component="img"
            sx={{
              display: "flex",
              mr: 1,
              ml: 1,
              mt: 1,
              mb: 1,
              maxWidth: 300,
              maxHeight: 300,
              //mirror along y axis
              transform: "scaleX(-1)",
              zIndex: -100,
            }}
            src={logo}
          />
        </Box>
        <Spacer />
        <LinearProgress
          color="secondary"
          sx={{
            color: "black",
            width: "200px",
            height: "4px",
            borderRadius: "2px",
            backgroundColor: PALETTE.bgOne,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "white",
            },
          }}
        />
      </div>
    </Modal>
  );
};

export default LoadingModal;
