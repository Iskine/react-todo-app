import { useState } from "react";
import { Task, useStyles } from "../style";
import { TextField } from "@mui/material";

const Tasks = (props) => {
  const classes = useStyles();

  const {
    name,
    handleRemove,
    handleEdit,
    editId,
    editValue,
    handleSaveEdit,
    handleChangeEdit,
    handleDone,
  } = props;
  return (
    <>
      {name.map((e) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Task key={e.id}>
            {e.done ? (
              <div
                className={classes.doneTaskCircle}
                onClick={() => handleDone(e.id)}
              ></div>
            ) : (
              <div
                className={classes.notDoneTaskCircle}
                onClick={() => handleDone(e.id)}
              ></div>
            )}

            {editId === e.id ? (
              <TextField
              sx={{marginLeft:"80px"}}
                value={editValue}
                onChange={(event) => handleChangeEdit(event.target.value)}
                onBlur={() => handleSaveEdit(e.id)}
                autoFocus
              />
            ) : (
              <h2 style={{ color: "#101621", width: "40%", margin: "0 70px" }}>
                {e.todo}
              </h2>
            )}

            <div style={{ display: "flex", gap: "20px", marginRight: "20px" }}>
              <div onClick={() => handleEdit(e.id)}>
                <img
                  id="edit-button"
                  src="../../pencil pixel.png"
                  widht="30px"
                  heigth="30px"
                  alt="edit button"
                />
              </div>
              <div onClick={() => handleRemove(e.id)}>
                <img
                  id="delete-button"
                  src="../../bigger pixel bin.png"
                  width="30px"
                  height="30px"
                  alt="delete button"
                />
              </div>
            </div>
          </Task>
        </div>
      ))}
    </>
  );
};

export default Tasks;
