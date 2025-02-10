import { useState, useRef, useEffect } from 'react';
import styles from './dropdown.module.css';

interface DropdownProps {
  icon: React.ReactElement;
  dropdownItems: { label: string; onClick: () => void }[];
  buttonText?: string;
  text?: string;
}



export const Dropdown = ({ icon, buttonText, dropdownItems, text }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {buttonText && <span className={styles.buttonText}>{buttonText}</span>}
      </button>
      
      {isOpen && (
        <div className={styles.dropdownContent}>
            <div className={styles.dropdownHeader}>
                <span className={styles.dropdownHeaderText}>
                    {text}
                </span>
            </div>
          {dropdownItems?.map((item) => (
            <div key={item.label} onClick={item.onClick} className={styles.dropdownItem}>
              {item.label}
            </div>
          ))}

        </div>
      )}
    </div>

  );
};
