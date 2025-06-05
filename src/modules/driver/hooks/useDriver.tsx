import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '@/common/config/api';
import * as Types from '@/modules/driver/types';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';

export const useDriver = () => {
  const user = useStoredTelegramUser();
  const [data, setData] = useState<Types.IEntity.Driver | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasTried, setHasTried] = useState(false);

  const fetchData = useCallback(async () => {
    if (!user?.id) return;

    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch(`${BASE_URL}/driver/me/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ telegram_id: user.id })
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
      setHasTried(true);
    }
  }, [user]);

  useEffect(() => {
    if (user?.id && !hasTried) {
      fetchData();
    }

    const timeout = setTimeout(() => {
      if (!user?.id && !hasTried) {
        setError('Foydalanuvchi maʼlumotlari topilmadi.');
        setHasTried(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [user, fetchData, hasTried]);

  return {
    data,
    error,
    success,
    loading,
    fetchData
  };
};
