import { FC } from 'react';
import { Avatar as AntdAvatar } from 'antd';

import user_image from '../../assets/images/user-image.png';

import classes from './Avatar.module.scss';

interface AvatarPropsType {
  src?: string;
  size: number;
  alt?: string;
}

const Avatar: FC<AvatarPropsType> = ({ size, src, alt = 'User' }) => {
  return <AntdAvatar src={src || user_image} size={size} alt={alt} className={classes.avatar} />;
};

export default Avatar;
