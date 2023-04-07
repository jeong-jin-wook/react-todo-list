import React, { CSSProperties } from "react";
import classes from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = (props: InputProps) => {
  return <input maxLength={40} max={40} className={classes.input} {...props} />;
};

export default Input;
