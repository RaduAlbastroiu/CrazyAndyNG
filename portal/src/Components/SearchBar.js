import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Add from "@material-ui/icons/Add";
import "../App.css";
export default function SearchBar() {
  return (
    <div
      position='static'
      style={{
        backgroundColor: "white",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      }}
      className='shadowbox'
    >
      <Toolbar>
        <div style={{ width: "100%" }}>
          <InputBase
            placeholder='Search By Name'
            style={{
              color: "gray",
              width: "100%",
            }}
          />
        </div>
        <SearchIcon style={{ marginLeft: "0.5%", color: "gray" }} />
        <Add style={{ marginLeft: "0.5%", color: "blue" }} />
      </Toolbar>
    </div>
  );
}
