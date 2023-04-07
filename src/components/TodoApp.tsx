import React, { useState, useCallback, useRef } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Card from "./UI/Card/Card";
import TodoProgress from "./TodoProgress";
import SideCard from "./UI/Card/SideCard";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: false,
    },
    {
      id: 2,
      text: "nextjs 배우기",
      done: false,
    },
  ]);
  const nextId = useRef(3);

  const onInsert = useCallback((text: string) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text,
        done: false,
      })
    );
    nextId.current += 1;
  }, []);
  const onToggle = useCallback((id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);
  const onRemove = useCallback((id: number) => {
    setTodos((todos) => todos.filter((todo) => !(todo.id === id)));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideCard>
        <TodoProgress
          todoSize={todos.length}
          todoDoneSize={todos.reduce((current, todo) => {
            if (todo.done) {
              return current + 1;
            } else {
              return current;
            }
          }, 0)}
        />
      </SideCard>
      <Card todoSize={todos.length}>
        <TodoForm onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </Card>
    </div>
  );
};

export default TodoApp;
