import axios from "axios";
import { AUTH_TOKEN } from "./util/utils";


const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
instance.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = AUTH_TOKEN;
      }
     
      return config;
    },
    (err) => Promise.reject(err)
  );
export default instance;