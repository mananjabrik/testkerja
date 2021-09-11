import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import Image from "next/image";

import { NextArrow, PrevArrow } from ".";

export interface CaraouselProps {
  urls: StaticImageData[];
}
export const Caraousel: React.FC<CaraouselProps> = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <Box>
      <Slider {...settings}>
        {props.urls?.map((item: StaticImageData, idx: number) => {
          return (
            <Box key={idx}>
              <Image src={item} alt="aset" />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};
