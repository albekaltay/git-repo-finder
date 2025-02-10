interface RadioButtonProps {
  value: string;
  label: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export type { RadioButtonProps };
