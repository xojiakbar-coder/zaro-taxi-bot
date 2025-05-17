import axios, { AxiosError } from "axios";
import { useState } from "react";
import { telegramId } from "./useTelegramId"; // If it's a function, call it as telegramId()
import { BASE_URL } from "./../../../common/config/api";
import type { OrderFormData } from "@/modules/routes/types";

export const useOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitOrder = async (data: OrderFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        ...data,
        telegram_id: telegramId, // or telegramId() if it's a function
      };

      const response = await axios.post(
        `${BASE_URL}/passenger/bookings/create/`,
        payload
      );

      console.log("Order submitted:", response.data);
      setSuccess(true);
    } catch (err) {
      const axiosError = err as AxiosError<{ message?: string }>;
      console.error("Failed to submit order:", axiosError);

      setError(
        axiosError.response?.data?.message ??
          "Buyurtma yuborishda xatolik yuz berdi."
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    submitOrder,
    loading,
    error,
    success,
  };
};
