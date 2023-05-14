import React from "react";
import "./UsersList.scss";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
// import { TablePagination } from "../../components";
// import { dateFormat } from "../../_util/date";

export default function UsersList({ users, page, count, onChange }) {
  return (
    <div>
      <table>
        <thead>
          <tr colSpan={6}>
            <th>
              <div className="table-title">Users</div>
            </th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>
              <BsFillEnvelopeFill />
              Email
            </th>
            <th>
              <BsFillTelephoneFill /> Telephone
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr data-user-id={user.id} onClick={onChange} key={user.id}>
              <td>{user.id}</td>
              <td>{user.User.nombre}</td>
              <td>{user.User.apellidos}</td>
              <td> {user.User.email}</td>
              <td> {user.User.telefono}</td>
              {/* <td>{dateFormat(user.fecha_nacimiento)}</td>
               <td>{user?.alumno ? "YES" : "NO"}</td> */}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
               <tr>
                  <td colSpan={6}>
                     <TablePagination
                        page={page}
                        pages={pages}
                        limit={users.length}
                        count={count}
                        onChange={onChange}
                     />
                  </td>
               </tr>
            </tfoot> */}
      </table>
    </div>
  );
}
