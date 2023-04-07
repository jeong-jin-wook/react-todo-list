import React, { useCallback, useState } from "react";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

type TodoFormProps = {
  onInsert: (value: string) => void;
};

const TodoForm = ({ onInsert }: TodoFormProps) => {
  const [value, setValue] = useState<string>("");
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하십시오."
        onChange={onChange}
        value={value}
      />
      <Button type="submit">등록</Button>
    </form>
  );
};

export default TodoForm;
