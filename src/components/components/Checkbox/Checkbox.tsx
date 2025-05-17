import React from 'react';
import cx from 'clsx';

import { IconHOC } from '@/components/Icon';

import classes from './Checkbox.module.scss';

export interface IProps {
  checked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<IProps> = ({ checked, disabled = false, label, onChange }) => {
  return (
    <div className={classes.container}>
      <div
        className={cx(
          classes.wrapper,
          checked && classes[`wrapper--checked`],
          disabled && classes[`wrapper--disabled`]
        )}
        onClick={() => !disabled && onChange && onChange(!checked)}
      >
        <div className={classes.icon}>
          {disabled ? (
            <IconHOC name="CheckRectangle" variant="bulk" />
          ) : (
            <IconHOC name="CheckRectangle" variant="solid" />
          )}
        </div>
      </div>
      {!!label && (
        <div
          className={cx(classes.label, disabled && classes[`label--disabled`])}
          onClick={() => onChange && onChange(!checked)}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
