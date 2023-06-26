"use client";

import { menu } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import ValidationButton from "../ValidationButton/ValidationButton";

const CardsSwiper = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const addToCart = () => {
    const data = localStorage.getItem("cart");
    if (data) {
      !data.split(",").find((id) => Number(id) == menu[currSlide].id) &&
        localStorage.setItem(
          "cart",
          data + "," + JSON.stringify(menu[currSlide].id) + ":1"
        );
    } else {
      localStorage.setItem("cart", JSON.stringify(menu[currSlide].id) + ":1");
    }
  };

  return (
    <div>
      <Swiper
        className="w-72"
        modules={[EffectCards]}
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrSlide(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {menu.map((item, i) => {
          return (
            <SwiperSlide key={i} className="bg-gray-100 py-20 rounded-lg">
              <Image
                src={`/${item.file}`}
                width={288}
                height={288}
                alt={`/${item.name}`}
              />
              <div className="flex justify-between py-2 px-6">
                <p className="font-bold">{item.name}</p>
                <p>{item.price}€</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ValidationButton onClick={addToCart} text="Add" />
    </div>
  );
};

export default CardsSwiper;
