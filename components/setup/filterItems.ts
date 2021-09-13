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
    //todo filter array color, on singgle item
    return;
  }
  if (by === "size") {
    //todo filter array size, on singgle item
    return;
  } else {
    return arr?.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
};
