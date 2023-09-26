import { User } from "@/interfaces/user";
import axios from "axios";

export class AuthServices {
  async login(credentials: User) {
    const { data } = await axios.post<{ token: string }>(
      "http://localhost:3000/api/auth/login",
      credentials
    );
    return data;
  }

  async signup(credentials: User) {
    const { data } = await axios.post(
      "http://localhost:3000/api/users/",
      credentials
    );
    return data;
  }
}
