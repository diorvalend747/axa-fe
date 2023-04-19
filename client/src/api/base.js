import axios from "axios";

const config = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default config;
