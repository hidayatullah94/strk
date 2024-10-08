import axios from "axios";

export const Format = (num) => {
  return Intl.NumberFormat("idn-Id").format(num);
};

export const baseURLS = axios.create({
  baseURL: "https://struk.app-citrapersada.net",
});
