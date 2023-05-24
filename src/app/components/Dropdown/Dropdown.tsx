import React, { useRef, MouseEvent } from 'react';
import styles from './dropdown.css';
import { useOnClickOutside } from '../Hooks/useOnClickOutside';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsDropdownOpen(!isDropdownOpen));

  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);


  return (
    <div className={styles.container}  >
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        { button }
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer} ref={ref}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      )}
    </div>
  );
}

