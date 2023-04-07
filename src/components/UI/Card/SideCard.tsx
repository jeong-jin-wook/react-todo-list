import React, { ReactNode } from "react";
import classes from "./SideCard.module.css";

interface CardProps {
  todoSize?: number;
  todoItem?: boolean;
  children?: ReactNode;
}

const SideCard = (props: CardProps) => {
  return (
    <div
      className={classes.card}
      style={{
        height: `calc(6rem * ${props.todoSize} + 7rem)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default SideCard;
