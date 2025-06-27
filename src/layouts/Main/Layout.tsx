import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { BottomMenu } from '../BottomMenu/BottomMenu';

const Layout = () => {
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
