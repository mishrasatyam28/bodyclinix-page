import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "./Banner.css";

const Banner = () => {
  const imageArray = [
    "https://images.healthshots.com/healthshots/en/uploads/2022/11/18150539/dermatologist-1600x900.jpg",
    "https://www.laserskincare.com.au/wp-content/uploads/2020/08/hydrafacial.jpg",
    "https://freshskinclinic.com.au/wp-content/uploads/2023/06/smiling-woman-peeling-treatment.jpg",
    "https://www.chandigarhhelp.com/wp-content/uploads/2019/09/Skin-Specialist-in-Chandigarh.jpg",
    "https://www.theskindoctor.in/wp-content/uploads/2022/10/skin-tightening-1.jpg",
    "https://drkiranskinclinic.com/wp-content/uploads/2023/07/acne-treatment.jpg",
    "https://www.alcimed.com/wp-content/uploads/2020/09/traitement-anti-age-1.jpg",
  ];
  return (
    <div className=" 2xl:flex px-6 justify-between lg:my-10 gap-6 max-w-screen-2xl mx-auto p-4">
      <div className="grid py-6 lg:py-24 items-center space-y-5 text-center 2xl:text-left 2xl:w-1/2">
        <h4 className="text-2xl lg:text-3xl text-green-600 font-semibold">
          Level Up Your Glow.
        </h4>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
          Advanced Skin Care Solutions!
        </h2>
        <p className="text-xl font-semibold">
          Best Dermatologist in Delhi, One-stop solution for all your skin, and
          body concerns.
        </p>
        <div className="flex lg:gap-10 justify-around 2xl:justify-start">
          <a
            href="tel:+917303335036"
            className="inline-flex items-center justify-center py-3 font-medium text-center bg-green-600 text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90 text-xl"
          >
            Book an appointment
          </a>
        </div>
      </div>
      <div className="2xl:w-1/2 my-auto">
        <Swiper
          // onSlideChange={handleSlideChange}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            speed: 800,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            speed: 800,
            effectParams: {
              cubicBezier: "0.16, 1, 0.3, 1",
            },
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {imageArray.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded"
                src={imageUrl}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
