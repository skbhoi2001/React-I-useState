import { useState } from "react";

function TodoInput({ handleTaskAdd }) {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleAdd = () => {
    handleTaskAdd(todo);
  };
  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}

export default TodoInput;
