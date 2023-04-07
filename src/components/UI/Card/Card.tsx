import React, { ReactNode } from "react";
import classes from "./Card.module.css";

interface CardProps {
  todoSize?: number;
  todoItem?: boolean;
  children?: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={classes.card}
      style={{
        height: `calc(6rem * ${props.todoSize} + 9rem)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
