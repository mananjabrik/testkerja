import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import Image1 from "../aset/Group45.png";
import Image2 from "../aset/Group46.png";
import { Caraousel, CaraouselProps } from ".";
export interface BannerProps {
  banner1: StaticImageData[];
  banner2: StaticImageData[];
}
export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <Stack
      direction={{
        xl: "row",
        lg: "row",
        md: "row",
        sm: "column",
        base: "column",
      }}
      justify="space-around"
      display={{ xl: "flex", md: "flex", sm: "block", base: "none" }}
    >
      <Box
        w={{
          xl: "40rem",
          lg: "30rem",
          md: "22rem",
          sm: "35rem",
          base: "24rem",
        }}
      >
        <Caraousel urls={props.banner1} />
      </Box>
      <Box
        w={{
          xl: "40rem",
          lg: "30rem",
          md: "22rem",
          sm: "35rem",
          base: "24rem",
        }}
      >
        <Caraousel urls={props.banner2} />
      </Box>
    </Stack>
  );
};
