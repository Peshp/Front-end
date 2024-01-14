export default function TodoItem({text, isCompleted, _id, onChangeStatusHandler}) {
    const todoClass = isCompleted ? 'todo is-completed' : 'todo';
  
    const onChangeStatus = () => {
        onChangeStatusHandler(_id);
    }

    return (
      <tr className={todoClass}>
        <td>{text}</td>
        <td>{isCompleted ? 'Completed' : 'Not Completed'}</td>
        <td className="todo-action">
          <button onClick={onChangeStatus} className="btn todo-btn">Change status</button>
        </td>
      </tr>
    );
  }