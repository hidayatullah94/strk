import axios from "axios";

export const Format = (num) => {
  return Intl.NumberFormat("idn-Id").format(num);
};
export const formatCard = (num) => {
  return num.toString().replace(/\d{4}(?=\d)/g, "$& ");
};
export const baseURLS = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: "https://struk.app-citrapersada.net",
});
