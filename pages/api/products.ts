import type { NextApiRequest, NextApiResponse } from "next";
import products from "./products.json";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
   //@ts-ignore
   res.json(products);
}
