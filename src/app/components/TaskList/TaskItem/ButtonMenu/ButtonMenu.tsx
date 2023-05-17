import React from 'react';
import styles from './buttonmenu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuItemList } from './MenuItemList';
import { EIcons, Icon } from '../../../Icon';
import { MenuIcon } from '../../../Icon/Icons';

interface IButtonMenu {
  onClickActiveInput: () => void;
  taskId: string;
}

export function ButtonMenu({ onClickActiveInput, taskId }: IButtonMenu) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton} onClick={() => {setIsDropdownOpen(!isDropdownOpen)}}>
            {/* <Icon name={EIcons.menu}/> */}
            <MenuIcon />
          </button>
        }
      >
        <MenuItemList onClickActiveInput={onClickActiveInput} taskId={taskId}/>
      </Dropdown>
    </div>

  );
}
