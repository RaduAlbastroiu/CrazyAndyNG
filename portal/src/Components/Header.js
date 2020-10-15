import React from "react";
import { Item, Link, Nav } from "react-bootstrap";
import "../styles/Header.css";
export default function Header() {
  const navItem = () => {
    return (
      <div>
        <Nav>
          <Nav.Link
            className='plm'
            onClick={() => console.log("peleme")}
            style={{ marginRight: 20, color: "white", textDecoration: "none" }}
          >
            PLM 1
          </Nav.Link>
          <Nav.Link
            style={{ marginRight: 20, color: "white", textDecoration: "none" }}
          >
            PLM 2
          </Nav.Link>
          <Nav.Link
            style={{ marginRight: 20, color: "white", textDecoration: "none" }}
          >
            PLM 3
          </Nav.Link>
        </Nav>
      </div>
    );
  };
  return (
    <div
      style={{
        paddingBottom: 10,
        textAlign: "center",
        backgroundColor: "#3f51b5",
      }}
    >
      {navItem()}
    </div>
  );
}
