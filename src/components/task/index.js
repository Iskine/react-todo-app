import { useState } from "react";

export const TaskFunction = () => {
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
    const updatedList = list.map((e) =>
      e.id === id ? { ...e, done: !e.done } : e
    );
    setList(updatedList);
  };

  const countTask = list.filter((e) => e.done).length;

  return {
    list,
    input,
    setInput,
    editId,
    editValue,
    setEditValue,
    handleAddTask,
    handleRemove,
    handleEdit,
    handleChangeEdit,
    handleSaveEdit,
    handleDone,
    countTask,
  };
};
