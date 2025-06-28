import React, { useState } from 'react';
import { Radio, Text } from '@mantine/core';
import { IoIosCash, IoIosCard } from 'react-icons/io';

import styles from './Payment.module.scss';

interface IProps {}

const PaymentCard: React.FC<IProps> = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className={styles.outer_container}>
      <Radio.Card
        value="Card"
        onClick={() => setValue('Card')}
        className={`${styles.container} ${value === 'Card' ? styles.active : ''}`}
      >
        <IoIosCard className={styles.icon} />
        <Text className={styles.content}>Karta</Text>
      </Radio.Card>

      <Radio.Card
        value="Cash"
        onClick={() => setValue('Cash')}
        className={`${styles.container} ${value === 'Cash' ? styles.active : ''}`}
      >
        <IoIosCash className={styles.icon} />
        <Text className={styles.content}>Naqd</Text>
      </Radio.Card>
    </div>
  );
};

export default PaymentCard;
