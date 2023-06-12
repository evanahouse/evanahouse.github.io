import Box from "@mui/material/Box";
import { useTheme, useMediaQuery } from "@mui/material";
import logo from "../../../assets/images/evanHouse2.jpeg";


const ProfilePhoto = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="img"
      sx={{
        mr: 1,
        ml: 1,
        mt: 1,
        mb: 1,
        maxWidth: isMobile ? 200 : 500, // Adjust the maxWidth based on the screen size
      }}
      src={logo}
    />
  );
};

export default ProfilePhoto;
