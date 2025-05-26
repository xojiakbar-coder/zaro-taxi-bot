import axios from 'axios';
import * as Types from '../types';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/common/config/api';

export const useTariffsList = () => {
  const [data, setData] = useState<Types.IEntity.Tariff[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const fetchTariffs = async () => {
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await axios.get<Types.IEntity.Tariff[]>(`${BASE_URL}/tariffs`);
        setData(response.data);
        setSuccess(true);
      } catch (err: any) {
        setError(err?.message || 'Xatolik yuz berdi');
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  return { data, loading, error, success };
};
