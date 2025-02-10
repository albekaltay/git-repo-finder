import { SelectProps } from "./type";
import styles from "./select.module.css";

export const Select = ({ value, onChange, options, label, className }: SelectProps) => {
  return (
    <div className={styles.selectContainer}>
      {label && <span>{label}</span>}
      <select
        value={value}

        onChange={(e) => onChange(Number(e.target.value))}
        className={className}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}; 