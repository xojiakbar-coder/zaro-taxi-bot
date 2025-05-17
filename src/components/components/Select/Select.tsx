import React, { useState } from 'react';
import { Select as SelectBase, SelectProps } from 'antd';
import cx from 'clsx';

import DirectionDown from '@/components/Icon/list/outline/DirectionDown.tsx';
import Warning from '@/components/Icon/list/outline/Warning.tsx';

import classes from './Select.module.scss';

interface IOption {
  title: React.ReactNode;
  value: number | string;
  disabled?: boolean;
}

export interface IProps extends Omit<SelectProps, 'options' | 'onFocus' | 'onBlur' | 'removeIcon'> {
  options: IOption[];
  state?: 'default' | 'success' | 'error' | 'warning';
  message?: string;
  label?: string;
  required?: boolean;
  listEndMargin?: number;
  onListEnd?: () => void;
}

const Select: React.FC<IProps> = ({
  options,
  required,
  listEndMargin,
  onListEnd,
  state,
  message,
  label,
  disabled,
  ...props
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={cx(
        classes.wrapper,
        state && classes[`wrapper--state-${state}`],
        isFocused && classes[`wrapper--focused`]
      )}
    >
      {!!label && (
        <div className={classes.label}>
          {label} {required && <span className={classes.labelAsterix}>*</span>}
        </div>
      )}
      <SelectBase
        className={classes.select}
        {...props}
        {...{ disabled }}
        suffixIcon={
          state ? (
            <Warning width={24} height={24} className={cx(classes.icon, classes.iconError)} />
          ) : (
            <DirectionDown height={24} width={24} className={classes.icon} />
          )
        }
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onDropdownVisibleChange={open => setFocused(open)}
        onPopupScroll={event => {
          if (
            event.currentTarget.scrollTop + event.currentTarget.offsetHeight + Number(listEndMargin) ===
            event.currentTarget.scrollHeight
          ) {
            onListEnd && onListEnd();
          }
        }}
      >
        {options.map(option => {
          return (
            <SelectBase.Option key={option.value} value={option.value} disabled={option.disabled}>
              {option.title}
            </SelectBase.Option>
          );
        })}
      </SelectBase>
      {!!message && <div className={cx(classes.message, classes[`message-${state}`])}>{message}</div>}
    </div>
  );
};

export default Select;
