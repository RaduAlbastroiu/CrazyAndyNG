import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "../App.css";
export default function SearchBar() {
  return (
    <div
      position='static'
      style={{
        backgroundColor: "white",
        margin: 10,
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
      </Toolbar>
    </div>
  );
}
