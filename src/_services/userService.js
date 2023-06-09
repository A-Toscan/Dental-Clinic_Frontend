import axios from "axios";
import { global } from "../_global/global";

const userService = {};

userService.getAllPatients = async (token, page = 1) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    await axios.get(
      global.BASE_URL + `/users/profile/checkallpatients?page=${page}`,
      config
    )
  ).data;
};

export default userService;
