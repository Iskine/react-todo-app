import { useState } from "react";
import { useStyles, AddText } from "../style";
import Tasks from "./Tasks";
import { TaskFunction } from ".";
import Box from "./Box";

const AddTasks = (props) => {
  const classes = useStyles();

  const {
    list,
    input,
    setInput,
    editId,
    editValue,
    handleAddTask,
    handleRemove,
    handleEdit,
    handleChangeEdit,
    handleSaveEdit,
    handleDone,
    countTask,
  } = TaskFunction();

  return (
    <>
      <Box countTask={countTask} list={list} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "30px",
        }}
      >
        <AddText
          placeholder="type and click + button"
          id="outlined-basic"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div
          className={classes.buttonCircle}
          onClick={() => handleAddTask(input)}
        >
          <img
            src="../../pixel plus sign.png"
            width="20px"
            height="20px"
            alt="add task"
          />
        </div>
      </div>
      <div style={{ maxHeight: "30vw", overflowY: "auto" }}>
        <Tasks
          list={list}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
          handleChangeEdit={handleChangeEdit}
          handleSaveEdit={handleSaveEdit}
          editId={editId}
          editValue={editValue}
          handleDone={handleDone}
        />
      </div>
    </>
  );
};

export default AddTasks;
