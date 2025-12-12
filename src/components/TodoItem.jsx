import styles from "./TodoItem.module.css";

function TodoItem({ todoName, TodoDate, onDeleteClick }) {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoName}>{todoName}</div>
      <div className={styles.todoDate}>{TodoDate || "No date"}</div>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => {
          onDeleteClick(todoName);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
