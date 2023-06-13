import Box from "@mui/material/Box";
import logo from "../../../assets/images/evanHouse2.jpeg";
import useIsMobile from "../../../hooks/useIsMobile";

const ProfilePhoto = () => {
  const { isMobile } = useIsMobile();
  return (
    <Box
      component="img"
      sx={{
        mr: 1,
        ml: 1,
        mt: isMobile ? 0 : 1,
        mb: isMobile ? 4 : 1,
        maxWidth: isMobile ? 200 : 500, // Adjust the maxWidth based on the screen size
        alignSelf: isMobile ? "center" : "flex-start",

      }}
      src={logo}
    />
  );
};

export default ProfilePhoto;
