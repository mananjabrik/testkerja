import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductDTO } from "../../type/type";
interface ProducrRenderProps {
  dataRenders: ProductDTO[];
}
export const ProductsRender: React.FC<ProducrRenderProps> = (props) => {
  return (
    <Wrap
      mt={{ xl: "5", md: "4", sm: "3", base: "3" }}
      justify={{
        xl: "left",
        md: "left",
        sm: "space-around",
        base: "space-around",
      }}
    >
      {props.dataRenders?.map((item) => {
        return (
          <WrapItem
            w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}
            key={item.id}
          >
            <ProductCard
              image_url="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/558271.jpg"
              name={item.name}
              price={item.price}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
