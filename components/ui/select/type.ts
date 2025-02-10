type SelectProps = {
    value: number;
    onChange: (value: number) => void;
    options: number[];
    label?: string;
    className?: string;
  };

export type { SelectProps };