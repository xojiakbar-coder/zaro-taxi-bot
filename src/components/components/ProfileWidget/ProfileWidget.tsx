import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Dropdown } from 'antd';
import { MenuProps } from 'antd/lib';

import { useAuth, useLogout } from '@/modules/auth/hooks';

import classes from './ProfileWidget.module.scss';

interface IProps {}

const ProfileWidget: React.FC<IProps> = () => {
  const { profile } = useAuth();
  const { logout } = useLogout();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <NavLink to="/profile">{profile.firstName || profile.email}</NavLink>
    },
    {
      type: 'divider'
    },
    {
      key: '2',
      danger: true,
      label: <div>Chiqish</div>,
      onClick: () => logout()
    }
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']} arrow={{ pointAtCenter: true }}>
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar} src={profile.avatar && '/src/assets/images/user-image.png'} />
      </div>
    </Dropdown>
  );
};

export default ProfileWidget;
