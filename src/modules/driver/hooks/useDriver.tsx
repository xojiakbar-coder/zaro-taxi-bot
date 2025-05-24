import { useState } from 'react';
import * as Types from '@/modules/driver/types';
import { BASE_URL } from '@/common/config/api';

export const useList = () => {
  const [data, setData] = useState<Types.IEntity.Driver | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (telegram_id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(`${BASE_URL}/driver/me/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ telegram_id: telegram_id })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Buyurtma olishda xatolik yuz berdi: ${JSON.stringify(errorData)}`);
      }

      const result: Types.IEntity.Driver = await response.json();
      setData(result);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    success,
    loading,
    fetchData
  };
};

export default useList;
