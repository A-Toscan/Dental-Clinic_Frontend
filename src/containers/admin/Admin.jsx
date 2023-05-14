import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../_services/userService";
import { UsersList } from "../../components";
// import { dateFormat } from "../../_util/date";

export default function Admin() {
  //hooks
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);

  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const isAdmin = authState.userInfo.role == "3";
  console.log(authState.userInfo);

  useEffect(() => {
    if (isAdmin) {
      getAllPatients(authState.userToken, usersPage);
    } else {
      navigate("/Appointments");
    }
  }, [usersPage]);

  const handleUsersList = (e) => {
    const { page, userId } = e.currentTarget.dataset;
    handleSingleUser(userId);
  };

  const handleSingleUser = (userId) => {
    //
    console.log(userId);
  };

  const getAllPatients = async (token, page) => {
    try {
      const response = await userService.getAllPatients(token, page);
      setUsers(response.data);

      // setUsersCount(response.info.total_results);
      // setUsersPages(response.info.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const newUsers = (users) =>
    users.map((user) => {
      user.nombre = user.nombre;
      user.apellidos = user.apellidos;
      user.email = user.email;
      // user.role = user?.role ? user.role.role : "undefined";
      return user;
    });

  return (
    <>
      {isAdmin && (
        <>
          <h1>Admin panel</h1>
          <UsersList
            users={users}
            // page={usersPage}
            // pages={usersPages}
            // count={usersCount}
            // onChange={handleUsersList}
          />

          <br />
        </>
      )}
    </>
  );
}
