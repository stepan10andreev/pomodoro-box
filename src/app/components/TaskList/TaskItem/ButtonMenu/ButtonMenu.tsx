import React from 'react';
import styles from './buttonmenu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuItemList } from './MenuItemList';
import { EIcons, Icon } from '../../../Icon';
import { MenuIcon } from '../../../Icon/Icons';

export function ButtonMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton} onClick={() => {setIsDropdownOpen(!isDropdownOpen), console.log('yes')}}>
            {/* <Icon name={EIcons.menu}/> */}
            <MenuIcon />
          </button>
        }
      >
        <MenuItemList />
      </Dropdown>
    </div>

  );
}
