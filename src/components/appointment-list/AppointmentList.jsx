import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./AppointmentList.scss";

import DataListTable from "../data-list-table/DataListTable";
import appointmentService from "../../_services/appointmentService";


export default function AppointmentList({ appointments }) {
  //hooks
  const [appointments, setAppointments] = useState([]);

  const authState = useSelector((state) => state.auth);
  const isAdmin = authState.userInfo.role == "3";
  const user_id = authState.userInfo.id;

  useEffect(() => {
    console.log("UserEffect");
    if (!isAdmin) {
      console.log("NoAdmin");
      getAllAppointments(authState.userToken, user_id);
    } else {
      console.log("Admin");
      navigate("/");
    }
  }, [appointments]);

  const getAllAppointments = async (token, user_id) => {
    try {
      const response = await appointmentService.getAllAppointments(
        token,
        user_id
      );
      console.log(response);
      console.log("get all appointment");
      setAppointments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <DataListTable />
    </div>
  );
}
