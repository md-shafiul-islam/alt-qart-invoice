import axios from "axios";
import { useNavigate } from "react-router-dom";
import { REQUEST_HEADER } from "../utils/types";

axios.defaults.withCredentials = true;
axios.defaults.mode = "cors";
axios.defaults.headers = REQUEST_HEADER;

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
