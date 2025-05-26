import { useEffect, useState } from 'react';
import * as Types from '@/modules/order/types';

export const useStoredTelegramUser = (): Types.IEntity.User | null => {
  const [user, setUser] = useState<Types.IEntity.User | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('telegramUser');
    if (userStr) {
      try {
        const parsedUser = JSON.parse(userStr) as Types.IEntity.User;
        setUser(parsedUser);
      } catch (err) {
        console.error('Invalid user JSON in localStorage:', err);
      }
    }
  }, []);

  return user;
};
