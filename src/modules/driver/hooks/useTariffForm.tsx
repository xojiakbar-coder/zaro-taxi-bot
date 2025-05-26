import axios from 'axios';
import { useCallback, useState } from 'react';
import { BASE_URL } from '@/common/config/api';

export interface FormValues {
  driver: string;
  selected_tariff: string;
  tariff_payment_screenshot: File;
}

export const useTariffFrom = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (formData: FormValues) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();
      data.append('driver', formData.driver);
      data.append('selected_tariff', formData.selected_tariff);
      data.append('tariff_payment_screenshot', formData.tariff_payment_screenshot);

      const response = await axios.post(`${BASE_URL}/tariffs/driver-tariff/create/`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Buyurtma olishda xatolik yuz berdi: ${response.status}`);
      }

      setSuccess(true);
    } catch (err: any) {
      const nonFieldErrors = err.response?.data?.non_field_errors;
      if (Array.isArray(nonFieldErrors) && nonFieldErrors[0]?.includes('must make a unique set')) {
        setError('Siz bu tarifni allaqachon tanlagansiz yoki aktiv tarif mavjud.');
      } else {
        setError(err.response?.data?.detail || err.message || 'Xatolik yuz berdi.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    success,
    loading,
    fetchData
  };
};
