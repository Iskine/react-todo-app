import { useState } from "react";
import { useStyles, AddText } from "./style";

const AddTasks = (props) => {
  const classes = useStyles();

  const [list, setList] = useState('')
  
  const handleAddTask = (e) => {
    console.log(e);
    setList(e)
  }

  return (
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
        value={list}
        onChange={(e) => setList(e.target.value)}
      ></AddText>

      <div className={classes.buttonCircle} onClick={(e) => handleAddTask(e)}>
        <img
          src="../../pixel plus sign.png"
          width="20px"
          height="20px"
          alt="add task"
        />
      </div>
    </div>
  );
};

export default AddTasks;
