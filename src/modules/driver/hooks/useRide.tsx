import { useCallback, useState } from 'react';
import { BASE_URL } from '@/common/config/api';

export const useRide = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (driver: string, route: number) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(`${BASE_URL}/driver/create-ride/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ driver, route })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Buyurtma navbatga qo‘shilishda xatolik yuz berdi: ${JSON.stringify(errorData)}`);
      }

      const result: string = await response.json();
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
