import React from "react";
import { Table } from "react-bootstrap";

export default function DataTable({ data }) {
  const column = data[0] && Object.keys(data[0]);

  return (
    <div className="">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>{data[0] && column.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {column.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
