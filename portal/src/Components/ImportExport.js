import React from "react";
import "../App.css";

export default function ImportExport() {
  return (
    <div
      style={{ backgroundColor: "white", marginTop: 10, padding: 10 }}
      className='shadowbox'
    >
      <div style={{ textAlign: "right" }}>
        <button className='button1' style={{ marginRight: 30 }}>
          DELETE ALL
        </button>
        <button className='button2'>IMPORT</button>
      </div>
    </div>
  );
}
