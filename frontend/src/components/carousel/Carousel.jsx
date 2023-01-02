import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import img1 from "../../assets/carousel_images/acc.jpg";
import img2 from "../../assets/carousel_images/akeneo-2.png";
import img3 from "../../assets/carousel_images/allovoisins-1.png";
import img4 from "../../assets/carousel_images/decath.png";
import img5 from "../../assets/carousel_images/GIE-iris.png";
import img6 from "../../assets/carousel_images/groupama.jpg";
import img7 from "../../assets/carousel_images/iadvize.png";
import img8 from "../../assets/carousel_images/IKKS-1.png";
import img9 from "../../assets/carousel_images/klaxoon-.jpg";
import img10 from "../../assets/carousel_images/lengow-1.png";
import img11 from "../../assets/carousel_images/lucca-copie.png";
import img12 from "../../assets/carousel_images/lumiplan.jpg";
import img13 from "../../assets/carousel_images/maincare.jpg";
import img14 from "../../assets/carousel_images/manitou.png";
import img15 from "../../assets/carousel_images/mdm-1.png";

export default function SliderComponent() {
  return (
    <>
      <h2 className="text-center font-bold  text-xl md:text-4xl mt-4 md:mt-6">
        Ils nous font confiance
      </h2>
      <Swiper navigation modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="flex">
          <img className="object-fill w-1/5" src={img1} alt="" />
          <img className="object-fill w-1/5" src={img2} alt="" />
          <img className="object-fill w-1/5" src={img3} alt="" />
          <img className="object-fill w-1/5" src={img4} alt="" />
          <img className="object-fill w-1/5" src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img className="object-fill w-1/5" src={img6} alt="" />
          <img className="object-fill w-1/5" src={img7} alt="" />
          <img className="object-fill w-1/5" src={img8} alt="" />
          <img className="object-fill w-1/5" src={img9} alt="" />
          <img className="object-fill w-1/5" src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img className="object-fill w-1/5" src={img11} alt="" />
          <img className="object-fill w-1/5" src={img12} alt="" />
          <img className="object-fill w-1/5" src={img13} alt="" />
          <img className="object-fill w-1/5" src={img14} alt="" />
          <img className="object-fill w-1/5" src={img15} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}