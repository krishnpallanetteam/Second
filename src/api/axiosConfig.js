import axios from "axios";
// let token =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk";

export const axiosInstance = axios.create({
//   baseURL: "https://api.dev.pastorsline.com/api/contacts.json",
//   headers: { Authorization: token },
  baseURL: "http://192.168.0.134:8080/api/"
});
