import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { IMAGES } from "../../constants/images";
import useIsMobile from "../../hooks/useIsMobile";
import CustomSwiper from "./CustomSwiper";
import SwiperCard from "./SwiperCard";

const MediaContent = () => {
  const { isMobile } = useIsMobile();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "normal",
        justifyContent: "left",
        height: isMobile ? "60%" : "60%",
        minWidth: isMobile ? "50%" : 400,
        width: isMobile ? "100%" : "50%",
        flexDirection: isMobile ? "column" : "row",
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

        <div slot="pagination" className="swiper-pagination" />
      </CustomSwiper>
    </Container>
  );
};

export default MediaContent;
