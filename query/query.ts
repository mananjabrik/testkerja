import { useQuery } from "react-query";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export interface productsDTo {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export const useProductQuery = () =>
  useQuery("products", async () => {
    const axiosResponse = await httpClient.get<productsDTo[]>("/products");
    return axiosResponse.data;
  });
