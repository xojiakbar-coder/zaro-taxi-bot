import React from 'react';
import { Text } from '@mantine/core';
import type { IconType } from 'react-icons/lib';

import styles from './Payment.module.scss';

interface IProps {
  icon: IconType;
  content: string;
  active: boolean;
  onClick: () => void;
  value: string | number;
}

const PaymentCard: React.FC<IProps> = ({ active = false, icon: Icon, value, content, onClick }) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`} onClick={onClick} title={value.toString()}>
      {Icon && <Icon className={styles.icon} />}
      <Text className={styles.content}>{content}</Text>
    </div>
  );
};

export default PaymentCard;
