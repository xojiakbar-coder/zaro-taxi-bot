import { FC, ReactNode } from 'react';
import cx from 'clsx';

import classes from '../Table.module.scss';

interface IProps {
  variant?: 'blue' | 'green' | 'orange' | 'red' | 'gray';
  children: ReactNode;
}

const Tag: FC<IProps> = ({ variant = 'blue', children }) => (
  <div className={cx(classes.tag, classes[`tag--variant-${variant}`])}>{children}</div>
);

export default Tag;
