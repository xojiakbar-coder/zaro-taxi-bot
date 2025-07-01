import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { BottomMenu } from '../BottomMenu/BottomMenu';

import { LuBadgeInfo } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';

import { useStoredUser, useUser } from '@/modules/order/hooks';
import { useKeyboardStatus } from '@/common/utils/useKeyboardStatus';

const Layout = () => {
  const user = useUser();
  const storedId = useStoredUser()?.id;

  const isKeyboardOpen = useKeyboardStatus();

  useEffect(() => {}, [user]);

  useEffect(() => {}, [isKeyboardOpen]);

  if (!storedId) {
    return (
      <EmptyPage
        fullHeight={true}
        icon={LuBadgeInfo}
        title="Ma'lumotlar topilmadi"
        buttonContent="Biz bilan bog'lanish"
        externalLink="https://t.me/murodov_azizmurod"
        subtitle={`Bu holat uchun biz bilan bog'lanishingiz mumkin. ${storedId} ${user?.id}`}
      />
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
