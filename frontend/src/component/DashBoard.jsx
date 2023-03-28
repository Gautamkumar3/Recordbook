import React, { useState } from "react";
import "../App.css";

const DashBoard = () => {
  const [activeCell, setActiveCell] = useState(null);
  const [data, setData] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  const handleChange = (e) => {
    const newData = [...data];
    newData[activeCell.rowIndex][activeCell.colIndex] = e.target.value;
    setData(newData);
  };

  function handleClick(rowIndex, colIndex) {
    setActiveCell({ rowIndex, colIndex });
  }

  function convertableCell(rowIndex, colIndex, value) {
    if (
      activeCell &&
      activeCell.rowIndex === rowIndex &&
      activeCell.colIndex === colIndex
    ) {
      return (
        <input
          type="text"
          className="input"
          value={value}
          onChange={handleChange}
          onBlur={() => setActiveCell(null)}
          autoFocus
        />
      );
    } else {
      return (
        <div className="cell" onClick={() => handleClick(rowIndex, colIndex)}>
          {value}
        </div>
      );
    }
  }

  return (
    <div className="container">
      {data.map((row, rowIndex) => (
        <div className="box" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div className="column" key={colIndex}>
              {convertableCell(rowIndex, colIndex, cell)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashBoard;
