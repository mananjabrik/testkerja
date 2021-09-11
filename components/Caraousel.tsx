import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import Image from "next/image";

import { NextArrow, PrevArrow } from ".";
import gambar from "../aset/Group45.png";
import gambar2 from "../aset/Group46.png";

interface CaraouselProps {
   urls?: StaticImageData[];
}
export const Caraousel: React.FC<CaraouselProps> = (props) => {
   const dataImage = [gambar, gambar2, gambar, gambar2];
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
      <Box w="100%">
         <Slider {...settings}>
            {dataImage?.map((item: StaticImageData, idx: number) => {
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
