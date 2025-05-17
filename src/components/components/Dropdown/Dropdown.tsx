import { ReactNode } from 'react';
import type { DropDownProps, MenuProps } from 'antd';
import { Dropdown as DropdownBase } from 'antd';

import classes from './Dropdown.module.scss';

interface GenericDropdownProps extends DropDownProps {
  children: ReactNode;
  items?: MenuProps['items'];
}

const Dropdown = ({ items, children, ...props }: GenericDropdownProps) => {
  return (
    <DropdownBase menu={{ items }} className={classes.dropdown} {...props}>
      {children}
    </DropdownBase>
  );
};

export default Dropdown;
