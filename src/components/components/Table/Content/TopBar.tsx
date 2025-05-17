import React from 'react';

import classes from '../Table.module.scss';

interface IProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const TopBar: React.FC<IProps> = ({ left, center, right }) => {
  return (
    <div className={classes.bar}>
      {!!left && <div className={classes.barLeft}>{left}</div>}
      {!!center && <div className={classes.barCenter}>{center}</div>}
      {!!right && <div className={classes.barRight}>{right}</div>}
    </div>
  );
};

export default TopBar;
