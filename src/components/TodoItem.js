import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoslice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    dispatch(
      toggleCompleteAsync({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteTodoAsync({
        id: id,
      })
    );
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex w-25">
          <input
            type="checkbox"
            className="m-3"
            checked={completed}
            onChange={(e) => handleCheckboxChange(e)}
          ></input>
        </span>
        <span className="w-50 ">{title}</span>
        <button className="btn btn-danger" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
