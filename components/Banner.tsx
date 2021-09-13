import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Caraousel } from ".";
export interface BannerProps {
  banner1: StaticImageData[];
  banner2: StaticImageData[];
}
export const Banner: React.FC<BannerProps> = (props) => {
  return (
    <Grid
      templateRows="10% 1fr"
      templateColumns="repeat(12, 1fr)"
      gap={4}
      display={{ xl: "grid", md: "grid", sm: "none", base: "none" }}
    >
      <GridItem colSpan={6}>
        <Caraousel urls={props.banner1} />
      </GridItem>
      <GridItem colSpan={6}>
        <Caraousel urls={props.banner2} />
      </GridItem>
    </Grid>
  );
};
