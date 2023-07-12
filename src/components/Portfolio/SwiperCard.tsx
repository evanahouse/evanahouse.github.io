import Box from "@mui/material/Box";
import useIsMobile from "../../hooks/useIsMobile";

interface SwiperCardProps {
  src: string;
}

const SwiperCard = ({ src }: SwiperCardProps) => {
  const { isMobile } = useIsMobile();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? 150 : 350, // Set the width based on the screen size
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Add shadow
        borderRadius: isMobile ? 8 : 16, // Add border radius
        overflow: "hidden", // Hide overflow content
        position: "relative", // Position the box
        border: "none", // Remove the border
        margin: "0 auto", // Center the box horizontally
        padding: "4px", // Add a small padding
        backgroundColor: "black", // Add a background color
      }}
    >
      <Box
        component="img"
        sx={{
          maxWidth: "100%", // Adjust the maxWidth based on the screen size
          alignSelf: "center",
          objectFit: "cover",
          position: "relative", // Position the image
          zIndex: 1, // Bring the image to the front
        }}
        src={src}
      />
      <Box
        sx={{
          position: "absolute",
          top: -4, // Adjust the value to position the border correctly
          left: -4, // Adjust the value to position the border correctly
          right: -4, // Adjust the value to position the border correctly
          bottom: -4, // Adjust the value to position the border correctly
          border: "2px solid black", // Add border
          borderRadius: 16, // Make it match the border radius
          zIndex: 0, // Place the border behind the image
        }}
      />
    </Box>
  );
};

export default SwiperCard;
