import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim()) {
      onNewItem(todoName, dueDate);
      setDueDate("");
      setTodoName("");
    }
  };

  return (
    <div className={styles.addTodoContainer}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
            className={styles.input}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddButtonClicked();
              }
            }}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className={styles.input}
          />
        </div>
        <div className={styles.inputWrapper}>
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddButtonClicked}
            disabled={!todoName.trim()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
