import React from 'react';
import cx from 'clsx';

import Radio from '@/components/Radio';

import classes from './CheckList.module.scss';

export interface IProps {
  label?: React.ReactNode;
  onChange?: (event: boolean) => void;
  value?: boolean;
  border?: 'top' | 'bottom';
}

const Item: React.FC<IProps> = ({ label, onChange, value, border }) => {
  return (
    <div className={cx(classes.item, border && classes[`item--border-${border}`])}>
      <div className={classes.label}>{label}</div>
      <div className={classes.list}>
        <div
          className={cx(classes.option, value === true && classes[`item--active`])}
          onClick={() => onChange && onChange(true)}
        >
          <Radio checked={value === true} /> <div className={classes.optionLabel}>Ha</div>
        </div>
        <div
          className={cx(classes.option, value === false && classes[`item--active`])}
          onClick={() => onChange && onChange(false)}
        >
          <Radio checked={value === false} />
          <div className={classes.optionLabel}>Yoq</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
