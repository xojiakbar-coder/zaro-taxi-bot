import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { BottomMenu } from '../BottomMenu/BottomMenu';

import { LuBadgeInfo } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';

import { useStoredUser } from '@/modules/order/hooks';

const Layout = () => {
  const storedId = useStoredUser()?.telegram_id;

  if (!storedId) {
    return (
      <EmptyPage
        fullHeight={true}
        icon={LuBadgeInfo}
        title="Ma'lumotlar topilmadi"
        buttonContent="Biz bilan bog'lanish"
        externalLink="https://t.me/murodov_azizmurod"
        subtitle="Bu holat uchun biz bilan bog'lanishingiz mumkin."
      />
    );
  }

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
