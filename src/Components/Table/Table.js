import React from "react";
import TableDataCom from "../TableData/TableData";
import Pagination from "../Pagination/Pagination";
import "./table.css";

export default function MainTable() {
  return (
    <React.Fragment>
      <TableDataCom />
      <br></br>
      <Pagination />
    </React.Fragment>
  );
}
