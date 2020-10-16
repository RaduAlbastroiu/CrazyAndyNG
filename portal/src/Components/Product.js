import React from "react";
import "../App.css";
import { Image } from "react-bootstrap";
import trash from "../assets/trash.png";

const tabel = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>First Name</th>
          <th>First Name</th>

          <th>Last Nssssame</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>James</td>
          <td>Matman</td>
          <td>Matman</td>
          <td>Matman</td>

          <td>Chief Sandwich Eater</td>
        </tr>
        <tr>
          <td>The</td>
          <td>Tick</td>
          <td>Crimefighter Sorta</td>
          <td>Crimefighter Sorta</td>
          <td>Crimefighter Sorta</td>
          <td>Crimefighter Sorta</td>
        </tr>
      </tbody>
    </table>
  );
};

export default function Product() {
  return tabel();
}
