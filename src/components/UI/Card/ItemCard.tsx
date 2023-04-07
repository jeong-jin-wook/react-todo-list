import React, { ReactNode } from "react";
import classes from "./ItemCard.module.css";

interface CardProps {
  todoItem?: boolean;
  children?: ReactNode;
}

const ItemCard = (props: CardProps) => {
  return <div className={classes.itemCard}>{props.children}</div>;
};

export default ItemCard;
