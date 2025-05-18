import { useState } from 'react';
import { BASE_URL } from '@/common/config/api';

export const useDeleteOrder = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteOrder = async (telegram_id: string, order_id: string) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/passenger/bookings/delete/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegram_id,
          booking_id: order_id
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`O'chirishda xatolik: ${JSON.stringify(errorData)}`);
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  return {
    deleteOrder,
    loading,
    success,
    error
  };
};

export default useDeleteOrder;
