import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { SLIDES } from "../../constants/slides";
import useIsMobile from "../../hooks/useIsMobile";
import CustomSwiper from "./CustomSwiper";
import SwiperCard from "./SwiperCard";

interface MediaContentProps {
  selectedApp: "scatterbrainz" | "onebook" | "othermind";
  onSlideChange?: (swiper:any) => void;
}

const MediaContent = ({selectedApp, onSlideChange,}: MediaContentProps) => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: isMobile ? "65%" : "100%",
        // minWidth: isMobile ? "50%" : 400,
        width: isMobile ? "100%" : "50%",
        flexDirection: "column" ,
        flex:1,
        alignSelf: "center",
        zIndex: 10
      }}
    >
      <CustomSwiper selectedApp={selectedApp} onSlideChange={onSlideChange}>
        {SLIDES[selectedApp]?.map((slide, index) => (
          <SwiperSlide key={index}>
              <SwiperCard src={slide.src}  />
          </SwiperSlide>
        ))}
      </CustomSwiper>
 
    </Container>
  );
};

export default MediaContent;
