import { useQuery } from "react-query";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://shoesmart-test.vercel.app/api/products",
  withCredentials: true,
});
export const UseProductsQuery = () => {
  useQuery("products", async () => {
    const axiosResponse = await httpClient.get<[]>("");
    return axiosResponse.data;
  });
};
