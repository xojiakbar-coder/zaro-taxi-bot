import * as Types from '../types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useUser = (): Types.IEntity.User | null => {
  const { hash } = useLocation();
  const [user, setUser] = useState<Types.IEntity.User | null>(null);

  useEffect(() => {
    if (!hash.startsWith('#tgWebAppData=')) {
      const stored = localStorage.getItem('telegramUser');
      if (stored) {
        try {
          const parsedUser = JSON.parse(stored) as Types.IEntity.User;
          setUser(parsedUser);
        } catch (e) {
          console.error('Error parsing stored user JSON:', e);
        }
      }
      return;
    }

    try {
      const rawData = hash.replace('#tgWebAppData=', '');
      const decoded = decodeURIComponent(rawData);
      const params = new URLSearchParams(decoded);
      const userRaw = params.get('user');

      if (userRaw) {
        const userJson = decodeURIComponent(userRaw);
        const parsedUser = JSON.parse(userJson) as Types.IEntity.User;

        // LocalStorage'ga saqlash
        localStorage.setItem('telegramUser', JSON.stringify(parsedUser));

        // Saqlangan qiymatni tekshirish
        const saved = localStorage.getItem('telegramUser');
        console.log('Saved telegramUser:', saved);

        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Failed to parse Telegram user data:', error);
    }
  }, [hash]);

  return user;
};

export default useUser;
