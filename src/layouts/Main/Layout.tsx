import { Outlet } from 'react-router-dom';
import classes from './Layout.module.scss';
import { BottomMenu } from '../BottomMenu/BottomMenu';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.content}>
        <Outlet />
      </div>
      <BottomMenu />
    </div>
  );
};

export default Layout;
