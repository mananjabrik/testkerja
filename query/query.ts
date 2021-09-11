import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://shoesmart-test.vercel.app/api",
  withCredentials: true,
});
