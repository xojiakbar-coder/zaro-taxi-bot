import * as Types from '../types';
import { useLocation } from 'react-router-dom';
import storage from '../../../common/services/storage';

type TelegramUser = {
  id: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
};

const defaultUser: TelegramUser = {
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  avatarUrl: ''
};

export const getTelegramUser = (): TelegramUser => {
  const { hash } = useLocation();

  const savedUser = storage.session.get('telegram_user');
  if (savedUser && savedUser.id) {
    return savedUser;
  }

  if (!hash.startsWith('#tgWebAppData=')) return defaultUser;

  try {
    const rawData = hash.replace('#tgWebAppData=', '');
    const decoded = decodeURIComponent(rawData);
    const params = new URLSearchParams(decoded);
    const userRaw = params.get('user');

    if (userRaw) {
      const userJson = decodeURIComponent(userRaw);
      const user: Types.IEntity.User = JSON.parse(userJson);

      const formattedUser: TelegramUser = {
        id: user.id.toString(),
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        avatarUrl: user.photo_url
      };

      storage.session.set('telegram_user', formattedUser);

      return formattedUser;
    }
  } catch (error) {
    console.error('Failed to parse Telegram user data:', error);
  }

  return defaultUser;
};
