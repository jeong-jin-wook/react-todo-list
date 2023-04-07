import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "components/TodoApp";

describe("<TodoApp/>", () => {
  it("todolist 렌더링", () => {
    render(<TodoApp />);
    screen.getByText("등록");
  });
  it("renders two defaults todos", () => {
    render(<TodoApp />);
    screen.getByText("TDD 배우기");
    screen.getByText("nextjs 배우기");
  });
  it("creates new todo", () => {
    render(<TodoApp />);
    userEvent.type(
      screen.getByPlaceholderText("할 일을 입력하십시오."),
      "새 항목 추가하기"
    );
    userEvent.click(screen.getByText("등록"));
    screen.getByText("새 항목 추가하기");
  });

  it("toggles todo", () => {
    render(<TodoApp />);

    const todoText = screen.getByText("TDD 배우기");
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
    userEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through;");
    userEvent.click(todoText);
    expect(todoText).not.toHaveStyle("text-decoration: line-through;");
  });
});
