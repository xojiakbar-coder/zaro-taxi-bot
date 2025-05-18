import React, { useEffect, useState } from 'react';
import classes from '../Order.module.scss';
import { TimeInput, DatePickerInput } from '@mantine/dates';
import { Checkbox, Input, Radio } from '@mantine/core';
import dayjs from 'dayjs';

interface IProps {
  formData: any;
  setFormData: any;
}

const FormBody: React.FC<IProps> = ({ formData, setFormData }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date());

  useEffect(() => {
    if (selectedDate && selectedTime) {
      const combined = dayjs(selectedDate).hour(dayjs(selectedTime).hour()).minute(dayjs(selectedTime).minute());

      const formatted = combined.format('YYYY-MM-DDTHH:mm');

      setFormData((prev: any) => ({
        ...prev,
        date_of_departure: formatted
      }));
    }
  }, [selectedDate, selectedTime]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <div className={classes.rowWrapper}>
        <Checkbox
          name="front_seat"
          checked={formData.front_seat}
          onChange={handleChange}
          className={classes.formCheckbox}
          label="Oldingi o‘rindiqdan joy kerakmi?"
        />
      </div>

      <Input.Wrapper className={classes.columnWrapper} label="Qo‘shimcha yuk:">
        <Input
          type="text"
          name="extra_luggage"
          value={formData.extra_luggage}
          onChange={handleChange}
          className={classes.formInput}
          placeholder="Qo‘shimcha yuk haqida yozing"
        />
      </Input.Wrapper>

      <div className={classes.rowWrapper}>
        <Checkbox
          label="Keshbek ishlatilsinmi?"
          name="is_cashback_used"
          checked={formData.is_cashback_used}
          onChange={handleChange}
          className={classes.formCheckbox}
        />
      </div>

      <Input.Wrapper label="Mashina turi:" className={classes.radioGroup}>
        {['Standart', 'Comfort', 'Biznes'].map(type => (
          <Radio
            key={type}
            label={type}
            value={type}
            name="car_type"
            checked={formData.car_type === type}
            onChange={handleChange}
            className={classes.formRadio}
          />
        ))}
      </Input.Wrapper>

      <Input.Wrapper label="Jo‘nash sanasi:" className={classes.columnWrapper}>
        <DatePickerInput
          value={selectedDate ? dayjs(selectedDate).format('YYYY-MM-DD') : undefined}
          onChange={(value: string) => {
            if (value) {
              setSelectedDate(dayjs(value, 'YYYY-MM-DD').toDate());
            } else {
              setSelectedDate(null);
            }
          }}
          className={classes.formDatePicker}
          placeholder="Sanani tanlang"
          clearable
        />
      </Input.Wrapper>

      <Input.Wrapper label="Jo‘nash vaqti:" className={classes.columnWrapper}>
        <TimeInput
          value={selectedTime ? dayjs(selectedTime).format('HH:mm') : undefined}
          onChange={event => {
            const value = event.target.value;
            if (value) {
              const [hours, minutes] = value.split(':').map(Number);
              const newDate = new Date(selectedTime || new Date());
              newDate.setHours(hours, minutes, 0, 0);
              setSelectedTime(newDate);
            } else {
              setSelectedTime(null);
            }
          }}
          className={classes.formInput}
          placeholder="Soatni tanlang"
        />
      </Input.Wrapper>

      <Input.Wrapper label="To‘lov turi:" className={classes.radioGroup}>
        {['Cash', 'Card'].map(type => (
          <Radio
            key={type}
            value={type}
            name="payment_type"
            onChange={handleChange}
            className={classes.formCheckbox}
            checked={formData.payment_type === type}
            label={type === 'Cash' ? 'Naqd' : 'Karta'}
          />
        ))}
      </Input.Wrapper>
    </>
  );
};

export default FormBody;
