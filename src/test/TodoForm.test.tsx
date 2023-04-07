import React from "react";
import { render, screen } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import userEvent from "@testing-library/user-event";

// describe("<TodoForm/>", () => {
//   const onInsert = jest.fn(); // 모킹, 가짜함수 생성

//   it("has input and button", () => {
//     render(<TodoForm onInsert={onInsert} />);
//     screen.getByPlaceholderText("할 일을 입력하십시오.");
//     screen.getByText("등록");
//   });

//   it("changes input", () => {
//     render(<TodoForm onInsert={onInsert} />);
//     const input = screen.getByPlaceholderText("할 일을 입력하십시오.");
//     userEvent.type(input, "TDD 배우기");
//     expect(input).toHaveAttribute("value", "TDD 배우기");
//   });

//   it("calls onInsert and clears input", () => {
//     render(<TodoForm onInsert={onInsert} />);
//     const input = screen.getByPlaceholderText("할 일을 입력하십시오.");
//     const button = screen.getByText("등록");
//     userEvent.type(input, "TDD 배우기");
//     userEvent.click(button);
//     expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert가 "TDD 배우기"를 파라미터로 호출됐는지
//     expect(input).toHaveAttribute("value", ""); // value값 비워졌는지
//   });
// });

describe("<TodoForm/>", () => {
  const onInsert = jest.fn(); // 모킹, 가짜함수 생성
  const setup = (props = {}) => {
    const { rerender } = render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText("할 일을 입력하십시오.");
    const button = screen.getByText("등록");
    return { rerender, input, button };
  };

  it("input과 button이 있는지", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("input 변경", () => {
    const { input } = setup();
    userEvent.type(input, "TDD 배우기");
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("onInsert 호출 및 초기화", () => {
    const { input, button } = setup();
    userEvent.type(input, "TDD 배우기");
    userEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert가 "TDD 배우기"를 파라미터로 호출됐는지
    expect(input).toHaveAttribute("value", ""); // value값 비워졌는지
  });
});
