import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import TodoItem from "../components/TodoItem";
import { todo } from "../types/todoType";

describe("<TodoItem/>", () => {
  const onToggle = jest.fn();
  const onRemove = jest.fn();
  type setupProps = {
    todo: todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
  };
  const sampleTodo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (
    props: setupProps
  ): { span: HTMLElement; button: HTMLElement } => {
    const initialProps = { todo: sampleTodo };
    render(
      <TodoItem
        todo={props.todo}
        onToggle={props.onToggle}
        onRemove={props.onRemove}
      />
    );
    const todo = props.todo || initialProps.todo;
    const span = screen.getByText(todo.text);
    const button = screen.getByText("삭제");
    return {
      span,
      button,
    };
  };
  it("span과 button이 있는지", () => {
    const { span, button } = setup({
      todo: sampleTodo,
      onToggle: onToggle,
      onRemove: onRemove,
    });
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });
  it("span, done이 true시 취소선O", () => {
    const { span } = setup({
      todo: { ...sampleTodo, done: true },
      onToggle: onToggle,
      onRemove: onRemove,
    });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });
  it("span, done이 false시 취소선X", () => {
    const { span } = setup({
      todo: { ...sampleTodo, done: false },
      onToggle: onToggle,
      onRemove: onRemove,
    });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });
  it("call onToggle", () => {
    const { span } = setup({
      todo: sampleTodo,
      onToggle: onToggle,
      onRemove: onRemove,
    });
    userEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });
  it("call onRemove", () => {
    const { button } = setup({
      todo: sampleTodo,
      onToggle: onToggle,
      onRemove: onRemove,
    });
    userEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
