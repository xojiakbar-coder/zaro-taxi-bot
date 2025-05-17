import { useState } from 'react';
import { Alert } from '@mantine/core';
import { Button } from '../../components/Button';
import { BASE_URL } from './../../common/config/api';
import { telegramId } from './../../modules/routes/hooks/useTelegramId';

import classes from './Order.module.scss';

interface OrderFormData {
  telegram_id: string;
  is_delivery: boolean;
  ride_price: string;
  cashback_used_percent: number;
  front_seat: boolean;
  extra_luggage: string;
  is_cashback_used: boolean;
  car_type: 'Standart' | 'Comfort' | 'Biznes';
  date_of_departure: string;
  payment_type: 'Cash' | 'Card';
}

const defaultFormData: OrderFormData = {
  telegram_id: telegramId,
  is_delivery: false,
  ride_price: '0',
  cashback_used_percent: 0,
  front_seat: false,
  extra_luggage: '',
  is_cashback_used: false,
  car_type: 'Standart',
  date_of_departure: '',
  payment_type: 'Cash'
};

const OrderPage = () => {
  const [formData, setFormData] = useState<OrderFormData>(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${BASE_URL}/passenger/bookings/create/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          telegram_id: telegramId
        })
      });

      if (!response.ok) {
        throw new Error('Buyurtma yuborishda xatolik yuz berdi.');
      }

      setSuccess(true);
      setFormData(defaultFormData);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Buyurtma berish</div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.label}>
          <input
            type="checkbox"
            name="front_seat"
            checked={formData.front_seat}
            onChange={handleChange}
            className={classes.input}
          />
          Oldingi o‘rindiqdan joy kerakmi?
        </label>

        <label className={classes.label}>
          Qo‘shimcha yuk:
          <input
            type="text"
            name="extra_luggage"
            value={formData.extra_luggage}
            onChange={handleChange}
            className={classes.input}
            placeholder="Qo‘shimcha yuk haqida yozing"
          />
        </label>

        <label className={classes.label}>
          <input
            type="checkbox"
            name="is_cashback_used"
            checked={formData.is_cashback_used}
            onChange={handleChange}
            className={classes.input}
          />
          Keshbek ishlatilsinmi?
        </label>

        <div className={classes.radioGroup}>
          Mashina turi:
          {['Standart', 'Comfort', 'Biznes'].map(type => (
            <label key={type} className={classes.label}>
              <input
                type="radio"
                name="car_type"
                value={type}
                checked={formData.car_type === type}
                onChange={handleChange}
                className={classes.input}
              />
              {type}
            </label>
          ))}
        </div>

        <label className={classes.label}>
          Jo‘nash sanasi:
          <input
            type="date"
            name="date_of_departure"
            value={formData.date_of_departure}
            onChange={handleChange}
            className={classes.input}
          />
        </label>

        <div className={classes.radioGroup}>
          To‘lov turi:
          {['Cash', 'Card'].map(type => (
            <label key={type} className={classes.label}>
              <input
                type="radio"
                name="payment_type"
                value={type}
                checked={formData.payment_type === type}
                onChange={handleChange}
                className={classes.input}
              />
              {type === 'Cash' ? 'Naqd' : 'Karta'}
            </label>
          ))}
        </div>

        {error && (
          <Alert variant="error" className={classes.alert}>
            Xatolik yuz berdi qayta urinib ko‘ring
          </Alert>
        )}
        {success && (
          <Alert variant="success" className={classes.alert}>
            Buyurtma muvaffaqiyatli yuborildi!
          </Alert>
        )}

        <Button type="submit" disabled={loading} className={classes.submitButton}>
          {loading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
        </Button>
      </form>
    </div>
  );
};

export default OrderPage;
