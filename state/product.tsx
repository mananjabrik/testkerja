import { atom } from "recoil";
import { ProductDTO } from "../type/type";
export const producState = atom<ProductDTO>({
  key: "producState",
  //@ts-ignore
  default: {},
});
