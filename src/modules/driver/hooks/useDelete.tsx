import { useState } from 'react';
import { BASE_URL } from '@/common/config/api';

export const useDeleteRide = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteOrder = async (telegram_id: string, ride_id: number) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/driver/delete-ride/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          telegram_id,
          ride_id
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

export default useDeleteRide;
