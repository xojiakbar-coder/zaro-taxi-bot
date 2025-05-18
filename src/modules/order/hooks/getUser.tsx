import * as Types from '../types';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useTelegramUser = (): { id: string } | null => {
  const { hash } = useLocation();
  const [user, setUser] = useState<{ id: string } | null>(null);

  useEffect(() => {
    if (!hash.startsWith('#tgWebAppData=')) {
      const storedId = localStorage.getItem('telegramUserId');
      if (storedId) {
        setUser({ id: storedId });
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
        const user: Types.IEntity.User = JSON.parse(userJson);
        const telegramId = `${user.id}`;

        setUser({ id: telegramId });

        localStorage.setItem('telegramUserId', telegramId);
      }
    } catch (error) {
      console.error('Failed to parse Telegram user data:', error);
    }
  }, [hash]);

  return user;
};
