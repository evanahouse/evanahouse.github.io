import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
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
        alignSelf: isMobile ? "center" : "auto",
      }}
      src={logo}
    />
  );
};

export default ProfilePhoto;
