import React from "react";
import "../users-list/UsersList.scss";

// import { TablePagination } from "../../components";
// import {dateForm} from "../data-list-table/DataListTable"

export default function DataListTable({
  data,
  title = "Data",
  headers,
  attributes,
  onChange,
  className,
}) {
  return (
    <div className={className}>
      <table>
        <thead>
          <tr colSpan={headers.length}>
            <th>
              <div className="tableTitle"> {title}</div>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
