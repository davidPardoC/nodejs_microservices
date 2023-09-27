import axios from "axios";
import {getCookie} from "cookies-next"

export const setupClientSideAxiosClient = () => {
  const token = getCookie("token")
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
