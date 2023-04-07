import React from "react";
import classes from "./TodoProgress.module.css";
type TodoProgressProps = {
  todoSize: number;
  todoDoneSize: number;
};
const TodoProgress = (props: TodoProgressProps) => {
  const todoSize = props.todoSize === 0 ? 1 : props.todoSize;
  const todoResult = props.todoDoneSize / todoSize;
  return (
    <>
      <div className={classes.barBack}>
        <hr
          className={classes.bar}
          style={{
            height: `calc( (${props.todoDoneSize / todoSize}) * 100%)`,
          }}
        />
      </div>
      <b style={{ fontSize: "1rem" }}>{(todoResult * 100).toFixed(2)}%</b>
    </>
  );
};

export default TodoProgress;
