import React from "react";
import styles from "./button.module.css";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({ onClick, label, icon }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon && icon}
      <span>{label}</span>
    </button>
  );
};

export default Button;
