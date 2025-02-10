import { RadioButton } from "@/components/ui";
import styles from "./languageSelector.module.css";

const languages = [
  { value: "javascript", label: "JavaScript", defaultChecked: true },
  { value: "scala", label: "Scala" },
  { value: "python", label: "Python" },
];

export const LanguageSelector = ({
  onLanguageChange,
  value,
}: {
  onLanguageChange: (value: string) => void;
  value: string;
}) => {
  return (
    <div className={styles.radioGroup}>
      {languages.map((language) => (
        <RadioButton
          key={language.value}
          value={language.value}
          label={language.label}
          name="language"
          checked={value === language.value}
          onChange={() => onLanguageChange(language.value)}
          className={styles.radioLabel}
        />
      ))}
    </div>
  );
};
