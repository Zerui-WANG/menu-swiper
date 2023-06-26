"use client";

import { menu } from "@/data/data";
import { CardContents } from "@/types/generalTypes";
import Image from "next/image";
import { useState } from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import ValidationButton from "../ValidationButton/ValidationButton";

const CardsSwiper = () => {
  const [currSlide, setCurrSlide] = useState(0);

  // Give an explicit type to data from the data file
  const cardContent: CardContents = menu;

  // Function to add the current slide item to the cart
  const addToCart = () => {
    const data = localStorage.getItem("cart");
    if (data) {
      // Check if the current item is already in the cart
      !data.split(",").find((id) => Number(id) == cardContent[currSlide].id) &&
        localStorage.setItem(
          "cart",
          data + "," + JSON.stringify(cardContent[currSlide].id) + ":1"
        );
    } else {
      // add to the browser local storage
      localStorage.setItem(
        "cart",
        JSON.stringify(cardContent[currSlide].id) + ":1"
      );
    }
  };

  return (
    <div>
      {/* Swiper component for card sliding */}
      <Swiper
        className="w-72"
        modules={[EffectCards]}
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrSlide(swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Render each card as a SwiperSlide */}
        {cardContent.map((item, i) => {
          return (
            <SwiperSlide key={i} className="bg-gray-100 py-20 rounded-lg">
              <Image
                src={`/${item.file}`}
                width={288}
                height={288}
                alt={`/${item.name}`}
              />
              <div className="flex justify-between py-2 px-6">
                {/* Display the name and price of the item */}
                <p className="font-bold">{item.name}</p>
                <p>{item.price}€</p>
              </div>
              {/* Display the description if available */}
              {item.description && (
                <p className="px-4 italic">{item.description}</p>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* ValidationButton component for adding the item to the cart */}
      <ValidationButton onClick={addToCart} text="Add" />
    </div>
  );
};

export default CardsSwiper;
