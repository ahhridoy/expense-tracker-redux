import axios from "axios";

export const instance = axios.create({
  baseURL: "https://expense-tracker-server-ecru.vercel.app",
});
