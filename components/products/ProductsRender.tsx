import React, { useState, useEffect } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductDTO } from "../../type/type";
import { useRecoilState } from "recoil";
import { producState } from "../../state/product";
import { useRouter } from "next/dist/client/router";
interface ProducrRenderProps {
  dataRenders: ProductDTO[];
}
export const ProductsRender: React.FC<ProducrRenderProps> = (props) => {
  const [product, setProduct] = useRecoilState(producState);
  const router = useRouter();
  // console.log(product);

  return (
    <Wrap mt={{ xl: "5", md: "4", sm: "3", base: "3" }}>
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
              product_click={() => {
                setProduct(item);
                router.push("/detail");
              }}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};
