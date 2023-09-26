import axios from "axios";

export const setupClientSideAxiosClient = (token?: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
