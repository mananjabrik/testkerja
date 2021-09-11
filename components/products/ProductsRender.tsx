import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { productsDTo } from "../../query/query";
interface ProducrRenderProps {
  dataRenders: productsDTo[];
}
export const ProductsRender: React.FC<ProducrRenderProps> = (props) => {
  return (
    <Wrap mt="5" justify="space-between">
      {props.dataRenders?.map((item) => {
        return (
          <WrapItem
            w={{ xl: "19%", md: "32%", sm: "47%", base: "47%" }}
            key={item.id}
          >
            <ProductCard
              imageurl={item.image}
              title={item.title}
              price={Number(item.price) * 13000 + ""}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
