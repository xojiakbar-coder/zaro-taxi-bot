import React from 'react';
import classes from '../Order.module.scss';
import { TimeInput } from '@mantine/dates';
import { Checkbox, Input, Radio } from '@mantine/core';

interface IProps {
  formData: any;
  setFormData: any;
}

const FormBody: React.FC<IProps> = ({ formData, setFormData }) => {
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
          type="checkbox"
          name="front_seat"
          checked={formData.front_seat}
          onChange={handleChange}
          className={classes.formCheckbox}
          label="Oldingi o‘rindiqdan joy kerakmi?"
        />
      </div>

      <Input.Wrapper className={classes.columnWrapper} label="Qo‘shimcha yuk:" error="">
        <Input
          type="text"
          name="extra_luggage"
          title="Qo‘shimcha yuk:"
          value={formData.extra_luggage}
          onChange={handleChange}
          className={classes.formInput}
          placeholder="Qo‘shimcha yuk haqida yozing"
        />
      </Input.Wrapper>

      <div className={classes.rowWrapper}>
        <Checkbox
          type="checkbox"
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
            type="radio"
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
        <input
          type="date"
          name="date_of_departure"
          onChange={handleChange}
          value={formData.date_of_departure}
          className={classes.formDatePicker}
        />
      </Input.Wrapper>

      <Input.Wrapper label="Jo‘nash vaqti:" className={classes.columnWrapper}>
        <TimeInput
          type="time"
          name="date_of_departure"
          onChange={handleChange}
          className={classes.formInput}
          value={formData.date_of_departure}
        />
      </Input.Wrapper>

      <Input.Wrapper label="To‘lov turi:" className={classes.radioGroup}>
        {['Cash', 'Card'].map(type => (
          <Radio
            key={type}
            type="radio"
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
