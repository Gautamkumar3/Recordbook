import React, { useState } from "react";
import "../App.css";

const DashBoard = () => {
  const data = new Array(15).fill(0);
  const [input, setInput] = useState("");

  return (
    <div className="container">
      {data.map((el) => (
        <div className="box">
          <input type="text" />
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
