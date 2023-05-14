import axios from "axios";
import { global } from "../_global/global";

const appointmentService = {};

appointmentService.getAllAppointments = async (token, user_id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    await axios.get(
      global.BASE_URL + `/appointments/checkall/${user_id}`,
      config
    )
  ).data;
};

export default appointmentService;