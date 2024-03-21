import React, { useState } from "react";
import "./Table.css";

const Table = ({ data }) => {
  const [details, setDetails] = useState([data]);

  console.log(details);

  const removetablehandler = () => {
    console.log("removed");
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {details.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>
              {" "}
              <button onClick={removetablehandler} className="btn-primary">
                remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
