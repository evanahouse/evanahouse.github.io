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
import { Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";
import useIsMobile from "../../hooks/useIsMobile";

interface CustomSwiperProps {
  children: React.ReactNode;
  onSlideChange?: (swiper:any) => void;
}

const CustomSwiper = ({ children, onSlideChange }: CustomSwiperProps) => {
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

  return (
    <Swiper
      onSlideChange={onSlideChange} // Pass the onSlideChange prop to handle slide change event
      effect="coverflow"
      grabCursor={true}
      // centeredSlides={true}
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
      navigation={true}
      keyboard={{ enabled: true }}
      style={{ width: "100%", height: "100%", alignSelf: "center" }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
