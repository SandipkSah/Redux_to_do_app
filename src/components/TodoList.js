import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../redux/todoslice";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-light table_bg">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className=" w-25">
                {" "}
                Complete Status
              </th>
              <th scope="col" className="m-auto ">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                title
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
