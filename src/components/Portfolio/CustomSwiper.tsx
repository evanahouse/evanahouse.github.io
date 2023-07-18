import SwiperCore, {
  A11y,
  EffectCoverflow,
  EffectCube,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";

// import "swiper/css/effect-cards";
import { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import useIsMobile from "../../hooks/useIsMobile";

interface CustomSwiperProps {
  children: React.ReactNode;
  onSlideChange?: (swiper: any) => void;
  selectedApp?: "scatterbrainz" | "onebook" | "othermind";
}

const CustomSwiper = ({
  children,
  onSlideChange,
  selectedApp,
}: CustomSwiperProps) => {
  SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCube,
    EffectCoverflow,
    Keyboard,
  ]);
  const { isMobile } = useIsMobile();

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (selectedApp && swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.activeIndex;

      if (activeIndex !== 0) {
        swiper.slideTo(0,0, false);
      }
    }
  }, [selectedApp]);

  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={onSlideChange} // Pass the onSlideChange prop to handle slide change event
      effect="cube"
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      // loop={true}
      pagination={isMobile ? false : { clickable: true, dynamicBullets: true }}
      coverflowEffect={{
        rotate: 20,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false,
      }}
      cubeEffect={{
        shadow: true,
        slideShadows: false,
        shadowOffset: isMobile ? 40 : 75,
        shadowScale: 0.54,
      }}
      navigation={true}
      keyboard={{ enabled: true }}
      style={{
        width: "100%",
        height: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        display: "flex",
        zIndex: 1,
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
