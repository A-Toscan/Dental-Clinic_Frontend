import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BsCalendarDate, BiTimeFive } from "react-icons/bs";
import DataListTable from "../../components/data-list-table/DataListTable";
// import { useState } from "react";
import appointmentService from "../../_services/appointmentService";
import { useNavigate } from "react-router-dom";

export default function Appointments() {
  //hooks
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isAdmin = authState.userInfo.role == "3";
  const user_id = authState.userInfo.id;
  const [allAppointments, setValue] = useState([]);
  useEffect(() => {
    if (!isAdmin) {
      getAllAppointments(authState.userToken, user_id);
    } else {
      navigate("/");
    }
  }, [allAppointments]);

  const getAllAppointments = async (token, user_id) => {
    try {
      const response = await appointmentService.getAllAppointments(
        token,
        user_id
      );

      setAppointments(response.data);
      console.log(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Appointments</h1>
      <div>
        <DataListTable
          data={appointments}
          title={"your appointments"}
          headers={["Date", "Time"]}
          attributes={["date", "time"]}
        />
      </div>
    </div>
  );
}
