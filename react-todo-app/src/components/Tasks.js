import { useState } from "react";
import { Task, useStyles } from "./style";

const Tasks = (props) => {
  const classes = useStyles();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Task>
        <div className={classes.taskCircle}></div>
        <h2 style={{ color: "#101621", width: "60%", margin: "0 70px" }}>
          WASH DISHES AND CLEAN{" "}
        </h2>
        <div style={{ display: "flex", gap: "20px", marginRight: "20px" }}>
          <img
            id="edit-button"
            src="../../pencil pixel.png"
            widht="30px"
            heigth="30px"
            alt="edit button"
          />
          <img
            id="delete-button"
            src="../../bigger pixel bin.png"
            width="30px"
            height="30px"
            alt="delete button"
          />
        </div>
      </Task>
    </div>
  );
};

export default Tasks;
