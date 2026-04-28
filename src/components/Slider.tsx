// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';
import './slider.scss'

const slider = [
  '0', '1', '2', '3', '4',
]

export default () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      speed={1200}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false, // Opcional: no pausar al hacer hover
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {
        slider.map((item) => (
          <SwiperSlide><img src={`/img/slider/slider${item}.webp`} alt={`slide ${item}`} /></SwiperSlide>
        ))
      }
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
  );
};
