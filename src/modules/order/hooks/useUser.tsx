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
          if (stored.startsWith('{')) {
            const parsedUser = JSON.parse(stored) as Types.IEntity.User;
            setUser(parsedUser);
          } else {
            console.warn('Noto‘g‘ri foydalanuvchi id:', stored);
          }
        } catch (e) {
          console.error('Error parsing stored user JSON:', e);
          localStorage.removeItem('telegramUser');
        }
      }
      return;
    }

    try {
      const rawData = hash.replace('#tgWebAppData=', '');
      const decoded = decodeURIComponent(rawData);
      const params = new URLSearchParams(decoded);
      const userRaw = params.get('user');
      const userId = params.get('id');

      if (userRaw) {
        const userJson = decodeURIComponent(userRaw);
        const parsedUser = JSON.parse(userJson) as Types.IEntity.User;

        localStorage.setItem('telegramUser', JSON.stringify({ ...parsedUser, debug: userId || parsedUser.id }));
        setUser({ ...parsedUser, degug: userId || parsedUser.id });
      }
    } catch (error) {
      console.error('Failed to parse Telegram user data:', error);
    }
  }, [hash]);

  return user;
};

export default useUser;
