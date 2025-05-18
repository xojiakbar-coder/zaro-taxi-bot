import { useState } from 'react';
import { Button } from '../../components/Button';
import { BASE_URL } from './../../common/config/api';

import FormBody from './components/Form';
import classes from './Order.module.scss';
import { LuCheck, LuX } from 'react-icons/lu';

import * as Types from '@/modules/order/types';
import { defaultFormData } from './../../modules/order/forms/index';
import Notification from '@/components/Notification';

const OrderPage = () => {
  const [formData, setFormData] = useState<Types.IEntity.Order>(defaultFormData);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Buyurtma yuborishda xatolik yuz berdi: ${JSON.stringify(errorData)}`);
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Buyurtma berish</div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <FormBody formData={formData} setFormData={setFormData} />

        {error && (
          <Notification
            color="red"
            icon={<LuX />}
            variant="error"
            className={classes.alert}
            title={`Xatolik yuz berdi, qayta urinib ko‘ring`}
          />
        )}
        {success && (
          <Notification color="teal" title="Ajoyib" variant="success" icon={<LuCheck />} className={classes.alert}>
            Buyurtma muvaffaqiyatli yuborildi!
          </Notification>
        )}

        <Button type="submit" variant="filled" height={50} disabled={loading} className={classes.submitButton}>
          {loading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
        </Button>
      </form>
    </div>
  );
};

export default OrderPage;
