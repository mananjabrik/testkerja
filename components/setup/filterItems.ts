import { ProductDTO } from "../../type/type";

export const filterItems = (
  arr: Array<ProductDTO>,
  by?: string,
  //@ts-ignore
  query: string
) => {
  if (by === "brand") {
    return arr.filter(
      (product) =>
        product.brand_name?.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  if (by === "color") {
    return arr.filter((product) =>
      product.variants?.some(
        (color) =>
          color.color?.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    );
  }
  if (by === "size") {
    //todo filter object array inside object array with object array inside size, on singgle item  wtf is this -_-
  } else {
    return arr?.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
};
