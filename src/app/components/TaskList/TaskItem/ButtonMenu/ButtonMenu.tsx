import React from 'react';
import styles from './buttonmenu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuItemList } from './MenuItemList';
import { EIcons, Icon } from '../../../Icon';
import { MenuIcon } from '../../../Icon/Icons';

interface IButtonMenu {
  onClick: () => void;
}

export function ButtonMenu({ onClick }: IButtonMenu) {
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
        <MenuItemList onClick={onClick}/>
      </Dropdown>
    </div>

  );
}
