import React from "react";
import "../users-list/UsersList.scss";
import { TablePagination } from "../../components";
// import {dateForm} from "../data-list-table/DataListTable"

export default function DataListTable({
   data,
   title = "Data",
   count,
   headers,
   attributes,
   onChange,
   className,
   pagination = null,
}) {
   return (
      <div className={className}>
         <table>
            <thead>
               <tr colSpan={headers.length}>
                  <th>
                     <div className="tableTitle">
                        {" "}
                        {title} ({count})
                     </div>
                  </th>
               </tr>
               <tr>
                  {headers.map((th, index) => (
                     <th key={index}>{th}</th>
                  ))}
               </tr>
            </thead>

            <tbody>
               {data.map((d) => (
                  <tr data-user-id={d.id} onClick={onChange} key={d.id}>
                     {attributes.map((attr, index) => (
                        <td key={index}>{d[attr]}</td>
                     ))}

                     {/* <td>{user.id}</td>
                     <td>{user.nombre}</td>
                     <td>{user.apellidos}</td>
                     <td>{user.email}</td>
                     <td>{dateFormat(user.fecha_nacimiento)}</td>
                     <td>{user?.alumno ? "YES" : "NO"}</td> */}
                  </tr>
               ))}
            </tbody>

            {pagination && (
               <tfoot>
                  <tr>
                     <td colSpan={headers.length}>
                        <TablePagination
                           page={pagination.page}
                           pages={pagination.pages}
                           count={pagination.count}
                           limit={data.length}
                           onChange={onChange}
                        />
                     </td>
                  </tr>
               </tfoot>
            )}
         </table>
      </div>
   );
}
