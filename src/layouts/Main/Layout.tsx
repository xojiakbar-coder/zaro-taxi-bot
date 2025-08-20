import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';
import { BottomMenu } from '../BottomMenu/BottomMenu';

import { LuBadgeInfo } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';
import { useKeyboardStatus } from '@/common/utils/useKeyboardStatus';

import * as Types from '@/modules/order/types';

const Layout = () => {
  const { hash } = useLocation();
  const isKeyboardOpen = useKeyboardStatus();

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

        localStorage.setItem('telegramUser', JSON.stringify(parsedUser));
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Failed to parse Telegram user data:', error);
    }
  }, [hash]);

  if (!user) {
    return (
      <>
        <EmptyPage
          fullHeight
          icon={LuBadgeInfo}
          title={`Foydalanuvchi topilmadi`}
          buttonContent={`Biz bilan bog'lanish`}
          externalLink="https://t.me/murodov_azizmurod"
          subtitle={`hash: ${hash}`}
        />
      </>
    );
  }

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Outlet />
      </div>
      {!isKeyboardOpen && <BottomMenu />}
    </div>
  );
};

export default Layout;
