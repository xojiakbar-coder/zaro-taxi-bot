import React from 'react';

import { IconHOC } from '@/components/Icon';

import classes from './FileUploader.module.scss';

export interface IProps {
  title: string;
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
}

const Item: React.FC<IProps> = ({ title, onRemove }) => {
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <IconHOC name="FileWrittenContinued" />
        </div>
        <div className={classes.title}>{title}</div>
      </div>
      <div className={classes.button} onClick={onRemove}>
        <IconHOC name="RemoveThin" className={classes.iconRed} />
      </div>
    </div>
  );
};

export default Item;
