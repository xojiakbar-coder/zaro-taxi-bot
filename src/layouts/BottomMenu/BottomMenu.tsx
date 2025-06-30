import { useEffect } from 'react';
import styles from './BottomMenu.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useIsDriver } from '@/common/utils/useIsDriver';
import { LuCirclePlus, LuCircleUser, LuShoppingCart } from 'react-icons/lu';

export const BottomMenu = () => {
  const location = useLocation();
  const isDriver = useIsDriver();

  useEffect(() => {}, [isDriver]);

  const navItems = [
    {
      value: !isDriver ? '/' : '/driver/new-order',
      icon: LuCirclePlus,
      label: 'Yangi buyurtma',
      activePaths: ['/', '/driver/new-order']
    },
    {
      value: !isDriver ? 'my-orders' : '/driver/my-orders',
      icon: LuShoppingCart,
      label: 'Buyurtmalarim',
      activePaths: ['/my-orders', '/driver/my-orders']
    },
    {
      value: !isDriver ? '/profile' : '/driver',
      icon: LuCircleUser,
      label: 'Profile',
      activePaths: ['/profile', '/driver']
    }
  ];

  return (
    <div className={styles.container}>
      {navItems.map(({ value, icon: Icon, label, activePaths }) => {
        const isActive = activePaths.includes(location.pathname);

        return (
          <NavLink key={value} to={value} className={`${styles.nav_link} ${isActive ? styles.active : ''}`}>
            <Icon className={styles.icon} />
            <span className={styles.label}>{label}</span>
          </NavLink>
        );
      })}
    </div>
  );
};
