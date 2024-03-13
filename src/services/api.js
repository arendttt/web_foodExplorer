import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-foodexplorer-8cg7.onrender.com" //"http://localhost:3333"
  });