import React from 'react';
import cx from 'clsx';
import dayjs from 'dayjs';
import DatePicker, { CalendarContainer, CalendarContainerProps, ReactDatePickerProps } from 'react-datepicker';

import Icon from '../Icon';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';
import classes from './DatePicker.module.scss';

export interface IProps extends Omit<ReactDatePickerProps, 'value' | 'onChange'> {
  state?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  isFocused?: boolean;
  required?: boolean;
  message?: string;
  label?: string;
  name?: string;
  value?: Date;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onClick?: (e: any) => void;
  className?: string;
}

type CustomHeaderProps = {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

const range = (start: number, end: number, step: number) => {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, i) => start + i * step);
};

const CustomContainer = ({ className, children }: CalendarContainerProps) => {
  return (
    <div className={classes.container}>
      <CalendarContainer className={className}>{children}</CalendarContainer>
    </div>
  );
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const CustomDatePicker: React.FC<IProps> = ({
  onChange,
  value,
  message,
  state = 'default',
  required,
  label,
  placeholder,
  disabled,
  size = 'md',
  className,
  ...props
}) => {
  const years = range(1990, dayjs().year() + 1, 1);

  return (
    <div
      className={cx(
        classes.wrapper,
        classes[`wrapper--state-${state}`],
        size && classes[`wrapper--size-${size}`],
        disabled && classes[`wrapper--disabled`],
        className
      )}
    >
      {!!label && (
        <div className={classes.label}>
          {label} {required && <span className={classes.labelRequired}>*</span>}
        </div>
      )}
      <DatePicker
        {...{ disabled }}
        {...props}
        calendarContainer={CustomContainer}
        showIcon
        dateFormat="dd.MM.yyyy"
        placeholderText={placeholder}
        className={classes.picker}
        icon={<Icon name="CalendarDot" />}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }: CustomHeaderProps) => (
          <div className={classes.header}>
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className={classes.button} type="button">
              <Icon name="ArrowLeft" size={24} />
            </button>
            <div className={classes.date}>
              <select
                className={classes.select}
                value={months[dayjs(date).month()]}
                onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
              >
                {months.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className={classes.select}
                value={dayjs(date).year()}
                onChange={({ target: { value } }) => changeYear(parseInt(value))}
              >
                {years.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className={classes.button} type="button">
              <Icon name="ArrowRight" size={24} />
            </button>
          </div>
        )}
        selected={value}
        onChange={e => onChange && onChange(e)}
      />

      {!!message && <div className={cx(classes.message, classes[`message-${state}`])}>{message}</div>}
    </div>
  );
};

export default CustomDatePicker;
