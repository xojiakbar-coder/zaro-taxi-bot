import React from 'react';

import classes from '../Table.module.scss';

interface IProps {
  source: string;
  size?: number;
}

const Image: React.FC<IProps> = ({ source, size = 80 }) => {
  return (
    <div
      className={classes.image}
      style={
        {
          '--size': `${size}px`
        } as React.CSSProperties
      }
    >
      <img src={source} alt="table image" />
    </div>
  );
};

export default Image;
