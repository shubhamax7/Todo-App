import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.todoItemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={`${item.name}-${index}`}
          todoName={item.name}
          TodoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
