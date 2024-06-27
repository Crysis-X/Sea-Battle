import React from "react";
import Config from "../../config/SWConfig";
import styles from "./Cells.module.css";

const Cell = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  const style: React.CSSProperties = {
    width: Config.ui.style.cellWidth.join(""),
    height: Config.ui.style.cellHeight.join(""),
  };
  return (
    <button
      {...props}
      className={[styles.cell, props.className].join(" ")}
      style={style}
    >
      {props.children}
    </button>
  );
};

export default Cell;
