import React from 'react';
import { Image, Text } from '@mantine/core';

import styles from './CarTypeCard.module.scss';

interface IProps {
  icon: string;
  content: string;
  active: boolean;
  onClick: () => void;
  value: string | number;
}

const PaymentCard: React.FC<IProps> = ({ active = false, icon, value, content, onClick }) => {
  return (
    <div className={`${styles.container} ${active ? styles.active : ''}`} onClick={onClick} title={value.toString()}>
      <Image src={icon && icon} className={styles.icon} />
      <Text className={styles.content}>{content}</Text>
    </div>
  );
};

export default PaymentCard;
