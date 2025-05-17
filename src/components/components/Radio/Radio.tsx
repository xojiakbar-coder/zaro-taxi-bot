import React, { CSSProperties } from 'react';
import cx from 'clsx';

import classes from './Radio.module.scss';

export interface IProps {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  labelSize?: number;
  onChange?: (value: boolean) => void;
  className?: string;
}

const Radio: React.FC<IProps> = ({ disabled, labelSize = 14, label, className, checked, onChange }) => {
  return (
    <div
      className={cx(
        classes.wrapper,
        checked && classes[`wrapper--checked`],
        disabled && classes[`wrapper--disabled`],
        !!className && className
      )}
      style={{ '--labelSize': `${labelSize}px` } as CSSProperties}
      onClick={() => !disabled && onChange && onChange(!checked)}
    >
      <div className={classes.radio}>
        <div className={classes.icon} />
      </div>
      {label && <div className={classes.label}>{label}</div>}
    </div>
  );
};

export default Radio;
