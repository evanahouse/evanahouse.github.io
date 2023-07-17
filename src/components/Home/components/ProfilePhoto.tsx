import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../../assets/images/evanHouse2.jpeg";
import useIsMobile from "../../../hooks/useIsMobile";

const ProfilePhoto = () => {
  const { isMobile } = useIsMobile();

  return (
 
      <Box
        component="img"
        sx={{
         
          maxWidth: {
            xs: 150,
            sm: 250,
            md: 250,
            lg: 400,
            xl: 600,
          },
          alignSelf: isMobile ? "center" : "center",
        }}
        src={logo}
      />
  );
};

export default ProfilePhoto;
