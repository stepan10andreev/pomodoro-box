import React from 'react';
import styles from './buttonmenu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icon/Icons';
import { MenuItemList } from './MenuItemList';

export function ButtonMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <MenuIcon />
          </button>
        }
      >
        <MenuItemList />
      </Dropdown>
    </div>

  );
}
