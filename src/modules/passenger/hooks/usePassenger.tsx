import { useCallback, useState } from 'react';
import { BASE_URL } from '@/common/config/api';
import * as Types from '@/modules/passenger/types';

export const usePassenger = () => {
  const [data, setData] = useState<Types.IEntity.Passenger | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (telegram_id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(`${BASE_URL}/passenger/me/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ telegram_id })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Buyurtma olishda xatolik yuz berdi: ${JSON.stringify(errorData)}`);
      }

      const result: Types.IEntity.Passenger = await response.json();
      setData(result);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    error,
    success,
    loading,
    fetchData
  };
};
