import { useState } from 'react';
import { BASE_URL } from '@/common/config/api';
import * as Types from '@/modules/order/types';

export const useCreatePassengerOrder = (defaultFormData: Types.IEntity.Order) => {
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

  return {
    formData,
    setFormData,
    loading,
    error,
    success,
    handleSubmit
  };
};
