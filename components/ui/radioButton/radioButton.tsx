import styles from "./radioButton.module.css";
import { RadioButtonProps } from "./type";

export const RadioButton = ({
  value,
  label,
  name,
  checked,
  onChange,
  className,
}: RadioButtonProps) => {
  return (
    <label key={value} className={`${styles.radioLabel} ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className={styles.radioInput}
        onChange={onChange}
      />
      {label}
    </label>
  );
};
