import React from 'react';
import { Image, Text } from '@mantine/core';

import styles from './CarTypeCard.module.scss';

interface IProps {
  carSvg: string;
  content: string;
  active: boolean;
  onClick: () => void;
  value: string | number;
}

const PaymentCard: React.FC<IProps> = ({ active = false, carSvg, value, content, onClick }) => {
  return (
    <div onClick={onClick} title={value.toString()}>
      <div className={`${styles.container} ${active ? styles.active : ''}`}>
        <Image src={carSvg && carSvg} className={styles.carSvg} />
      </div>
      <Text className={styles.content}>{content}</Text>
    </div>
  );
};

export default PaymentCard;
