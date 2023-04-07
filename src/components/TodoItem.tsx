import React, { useCallback } from "react";
import { todo } from "../types/todoType";
import ItemCard from "./UI/Card/ItemCard";
import Button from "./UI/Button/Button";
import CloseBtn from "./UI/Button/CloseBtn";

type TodoItemProps = {
  todo: todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};
const TodoItem = ({ todo, onToggle, onRemove }: TodoItemProps) => {
  const { id, text, done } = todo;

  const toggle = useCallback(() => {
    onToggle(id);
  }, [id, onToggle]);
  const remove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);
  return (
    <li style={{ listStyle: "none" }}>
      <ItemCard todoItem={true}>
        <span
          onClick={toggle}
          style={{ textDecoration: done ? "line-through" : "none" }}
        >
          {text}
        </span>
        <CloseBtn onClick={remove} />
      </ItemCard>
    </li>
  );
};

export default React.memo(TodoItem);
