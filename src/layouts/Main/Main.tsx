import { Outlet } from 'react-router-dom';

// icons
import { LuBadgeInfo } from 'react-icons/lu';

// styles
import styles from './Main.module.scss';

// components
import SubMenu from './components/SubMenu';
import EmptyPage from '@/components/EmptyPage';

// hooks
import { useUser } from '@/modules/order/hooks';
import { useKeyboardStatus } from '@/common/utils/useKeyboardStatus';

const Main = () => {
  const user = useUser();
  const isKeyboardOpen = useKeyboardStatus();

  if (!user) {
    return (
      <>
        <EmptyPage
          fullHeight
          icon={LuBadgeInfo}
          title={`Foydalanuvchi topilmadi`}
          buttonContent={`Biz bilan bog'lanish`}
          externalLink="https://t.me/murodov_azizmurod"
          subtitle={`Iltimos, qayta urinib ko'ring yoki qo'llab-quvvatlash xizmatiga murojaat qiling.`}
        />
      </>
    );
  }

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Outlet />
      </div>
      {!isKeyboardOpen && <SubMenu />}
    </div>
  );
};

export default Main;
