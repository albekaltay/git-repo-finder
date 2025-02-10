import React from "react";
import styles from "./input.module.css";
import { InputProps } from "./type";

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};
