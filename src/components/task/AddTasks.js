import { useState } from "react";
import { useStyles, AddText } from "../style";
import Tasks from "./Tasks";

const AddTasks = (props) => {
  const classes = useStyles();

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTask = (e) => {
    const newTodo = {
      id: Math.random(),
      todo: e,
      done: false, 
    };

    setList([...list, newTodo]);
    setInput("");
  };

  const handleRemove = (id) => {
    const newList = list.filter((e) => e.id !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    const selectTask = list.find((e) => e.id === id);
    setEditId(id);
    setEditValue(selectTask.todo);
  };

  const handleChangeEdit = (value) => {
    setEditValue(value);
  };

  const handleSaveEdit = (id) => {
    const updatedList = list.map((e) =>
      e.id === id ? { ...e, todo: editValue } : e
    );
    setList(updatedList);
    setEditId(null);
    setEditValue("");
  };

  const handleDone = (id) => {
   const updatedList = list.map(e => e.id === id ? { ...e, done: !e.done } : e)
   setList(updatedList)
  }

  return (
    <>
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
      <Tasks
        name={list}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
        handleChangeEdit={handleChangeEdit}
        handleSaveEdit={handleSaveEdit}
        editId={editId}
        editValue={editValue}
        handleDone={handleDone}
      />
    </>
  );
};

export default AddTasks;
