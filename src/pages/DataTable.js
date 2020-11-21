import React from "react";
import { Table } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function DataTable({ data }) {
  console.log("data", data);
  // const column = data[0] && Object.keys(data[0]);
  const columns = [
    {
      dataField: "id",
      text: "ID",
      classes: "column1",
      sort: true,
      onSort: (field, order, a, b) => {
        if (order === "asc") {
          return b - a;
        }
        return a - b; // desc
      },
      // Perform a reverse sorting here
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === "asc") {
          return b - a;
        }
        return a - b; // desc
      },
    },
    { dataField: "firstName", text: "First Name" },
    { dataField: "lastName", text: "Last Name" },
    {
      dataField: "emailAddress",
      text: "Email",
      style: { wordWrap: "break-word" },
    },
    { dataField: "phoneNumber", text: "Phone" },
    { dataField: "city", text: "City" },
    { dataField: "address1", text: "Address 1" },
    { dataField: "address2", text: "Address 2" },
    { dataField: "postalCode", text: "Zip Code" },
    { dataField: "state", text: "Country" },
  ];

  return (
    // <div className="">
    //   <Table striped bordered hover size="sm">
    //     <thead>
    //       <tr>{data[0] && column.map((heading) => <th>{heading}</th>)}</tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row) => (
    //         <tr>
    //           {column.map((column) => (
    //             <td>{row[column]}</td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tbody>
    //   </Table>
    // </div>
    <div>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        pagination={paginationFactory()}
        striped
        bordered
        hover
        size="sm"
      />
    </div>
  );
}
