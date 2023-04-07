import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";
describe("<TodoList/>", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "nextjs 배우기",
      done: true,
    },
  ];
  const onToggle = jest.fn();
  const onRemove = jest.fn();
  it("todos 렌더링", () => {
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it("onToggle 과 onRemove 호출", () => {
    const { getByText, getAllByText } = render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />
    );
    userEvent.click(getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);
    userEvent.click(getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
