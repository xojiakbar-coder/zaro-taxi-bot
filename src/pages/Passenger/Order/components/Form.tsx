import dayjs from 'dayjs';
import classes from '../Order.module.scss';
import { Chip, Input } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { IoIosCash, IoIosCard } from 'react-icons/io';
import { TimeInput, DatePickerInput } from '@mantine/dates';
import { PaymentCard } from '@/components/Card/PaymentCard';

import standartCarIcon from '../../../../assets/images/standart-car.svg';
import comfortCarIcon from '../../../../assets/images/comfort-car.svg';
import bussinessCarIcon from '../../../../assets/images/bussiness-car.svg';
import { CarTypeCard } from '@/components/Card/CarTypeCard';

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
        <Chip
          color="teal"
          name="front_seat"
          checked={formData.front_seat}
          className={classes.formCheckbox}
          onChange={(checked: boolean) =>
            setFormData((prev: any) => ({
              ...prev,
              front_seat: checked
            }))
          }
        >
          Oldingi o‘rindiqni band qilish
        </Chip>
        <Chip
          color="teal"
          name="is_cashback_used"
          className={classes.formCheckbox}
          checked={formData.is_cashback_used}
          onChange={(checked: boolean) =>
            setFormData((prev: any) => ({
              ...prev,
              is_cashback_used: checked
            }))
          }
        >
          Keshbekni ishlatish
        </Chip>
      </div>

      <Input.Wrapper className={classes.columnWrapper} label="Qo‘shimcha yuk:">
        <Input
          size="md"
          type="text"
          name="extra_luggage"
          onChange={handleChange}
          className={classes.formInput}
          value={formData.extra_luggage}
          placeholder="Qo‘shimcha yuk haqida yozing"
        />
      </Input.Wrapper>

      <Input.Wrapper label="Mashina turi:" className={classes.radioGroup}>
        <div className={classes.rowWrapper}>
          {[
            { icon: comfortCarIcon, content: 'Standart', value: 'Standart' },
            { icon: standartCarIcon, content: 'Comfort', value: 'Comfort' },
            { icon: bussinessCarIcon, content: 'Bussiness', value: 'Biznes' }
          ].map(item => (
            <CarTypeCard
              key={item.value}
              icon={item.icon}
              value={item.value}
              content={item.content}
              active={formData.payment_type === item.value}
              onClick={() => setFormData((prev: any) => ({ ...prev, payment_type: item.value }))}
            />
          ))}
        </div>
      </Input.Wrapper>
      <div className={classes.dateFiledsWrapper}>
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
            placeholder="Soatni tanlang"
            className={classes.formInput}
          />
        </Input.Wrapper>
      </div>
      <Input.Wrapper label="To‘lov turi:" className={classes.columnWrapper}>
        <div className={classes.rowWrapper}>
          {[
            { icon: IoIosCash, content: 'Naqd', value: 'Cash' },
            { icon: IoIosCard, content: 'Karta', value: 'Card' }
          ].map(item => (
            <PaymentCard
              key={item.value}
              icon={item.icon}
              value={item.value}
              content={item.content}
              active={formData.payment_type === item.value}
              onClick={() => setFormData((prev: any) => ({ ...prev, payment_type: item.value }))}
            />
          ))}
        </div>
      </Input.Wrapper>
    </>
  );
};

export default FormBody;
