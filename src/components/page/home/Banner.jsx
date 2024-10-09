import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const carouselData = [
    {
      id: 1,
      imgSrc:
        "https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FmiV1CPjbsn4KFxSKtYyYMbYj8utNx1HIrigLL0m5.webp&w=1920&q=75",
      alt: "First slide",
      prev: "#slide4",
      next: "#slide2",
    },
    {
      id: 2,
      imgSrc:
        "https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FGzDEKio2iNniwd3GKGB6PYjL3Gb2jOfsUIGC8DXK.webp&w=1920&q=75",
      alt: "Second slide",
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: 3,
      imgSrc:
        "https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FVhJBqkLgy3iZ8RjxwUmYeTDxIrfcW5GOYqyJgW0y.webp&w=1920&q=75",
      alt: "Third slide",
      prev: "#slide2",
      next: "#slide4",
    },
    {
      id: 4,
      imgSrc:
        "https://eonbazar.com/_next/image?url=https%3A%2F%2Fapp.eonbazar.com%2Fassets%2Fimages%2Fredactor%2FKF2F6WrN0Ht3YKstD95vIuOJiHz6gcbOkDA3BzN2.webp&w=1920&q=75",
      alt: "Fourth slide",
      prev: "#slide3",
      next: "#slide1",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            className="object-cover object-top h-screen"
            src={item.imgSrc}
            alt={item.id}
          />
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default Banner;
