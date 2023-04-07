import React, { ReactNode } from "react";
import classes from "./Button.module.css";
export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={classes.button} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
