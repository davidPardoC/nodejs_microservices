import axios from "axios";
import {getCookie} from "cookies-next"

export const setupClientSideAxiosClient = () => {
  const token = getCookie("token")
  axios.interceptors.request.use((config)=>{
    config.headers["Authorization"] = `Bearer ${token}`
    return config
  }, (error)=>{
    return Promise.reject(error)
  })
};
