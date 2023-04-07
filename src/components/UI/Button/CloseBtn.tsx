import React from "react";
import classes from "./CloseBtn.module.css";

type CloseBtnProps = {
  onClick: () => void;
};
const CloseBtn = (props: CloseBtnProps) => {
  return (
    <button onClick={props.onClick} className={classes.closeBtn}>
      x
    </button>
  );
};

export default CloseBtn;
