import Box from "@mui/material/Box";
import logo from "../../../assets/images/evanHouse1.jpg";
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
        mb: isMobile ? 1 : 1,
            maxWidth: {
          xs: 150,
          sm: 250,
          md: 250,
          lg: 300,
          xl: 600,
        }, // Adjust the maxWidth based on the screen size
        width: "80%",
        alignSelf: isMobile ? "center" : "center",
        //remove white space around image
        objectFit: "cover",
        borderRadius: "8px",
        //add border
        border: "2px solid black",
        //mirror image along y axis


      }}
      src={logo}
    />
  );
};

export default ProfilePhoto;
