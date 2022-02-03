import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);

  const handleTaskAdd = (title) => {
    const payload = {
      id: uuid(),
      title: title,
      status: false
    };
    setTodo([...todo, payload]);
  };
  const handleToggle = (id) => {
    const upadateToggle = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(upadateToggle);
  };
  return (
    <>
      <div>
        <TodoInput handleTaskAdd={handleTaskAdd} />
        <div>
          {todo.map((item) => {
            return (
              <TodoList
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
                handleToggle={handleToggle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
