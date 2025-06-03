import axios from 'axios';
import { useEffect, useState } from 'react';
import type { UseRouteList } from '../types';
import { BASE_URL } from '../../../common/config/api';

export const useList = (): UseRouteList => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setSuccess(false);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}/route/routes/`);
        if (isMounted) {
          setData(response.data);
          setSuccess(true);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err?.message || 'Ma’lumotlarni olishda xatolik yuz berdi.');
          setData([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, success, error };
};
