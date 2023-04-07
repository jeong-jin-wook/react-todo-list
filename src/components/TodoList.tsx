import React from "react";
import { todo } from "../types/todoType";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Array<todo>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
