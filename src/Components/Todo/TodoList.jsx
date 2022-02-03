import styles from "./Todo.module.css";

function TodoList({ id, title, status, handleToggle }) {
  return (
    <>
      <div className={styles.todoLayer}>
        <p>{title}</p>
        <p>{`${status}`}</p>
        <button onClick={() => handleToggle(id)}>Toggle</button>
      </div>
    </>
  );
}

export default TodoList;
