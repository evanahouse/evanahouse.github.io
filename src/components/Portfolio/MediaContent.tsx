import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Spacer from "../../common/Spacer";
import { IMAGES } from "../../constants/images";
import useIsMobile from "../../hooks/useIsMobile";
import CustomSwiper from "./CustomSwiper";
import SwiperCard from "./SwiperCard";

interface MediaContentProps {
  selectedApp: "scatterbrainz" | "onebook" | "othermind";
}

const MediaContent = ({selectedApp}: MediaContentProps) => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        height: isMobile ? "65%" : "60%",
        minWidth: isMobile ? "50%" : 400,
        width: isMobile ? "100%" : "50%",
        flexDirection: "column" 
      }}
    >
      <CustomSwiper>
        <SwiperSlide>
          <SwiperCard src={IMAGES.ScatterBrainzTimeToEat} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard src={IMAGES.ScatterBrainzLists} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard src={IMAGES.ScatterBrainzHome} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperCard src={IMAGES.ScatterBrainzFamilyHeadquarters} />
        </SwiperSlide>
      </CustomSwiper>
 
    </Container>
  );
};

export default MediaContent;
