import React from 'react';
import { Box, Stack, Text } from '@mantine/core';

import styles from './DataCard.module.scss';
import type { IconType } from 'react-icons/lib';

interface ColorsType {
  iconColor: 'blue' | 'orange' | 'green';
  iconBgColor: 'blue' | 'orange' | 'green';
}

type DataCardProps = {
  title: string;
  value: string;
  icon: IconType;
  colors: ColorsType;
};

const DataCard: React.FC<DataCardProps> = ({ title, value, icon: Icon, colors }) => {
  return (
    <div className={styles.card}>
      <Stack gap={8}>
        <div className={styles.header}>
          <Box className={`${styles.icon_wrapper} ${styles[colors.iconBgColor]}`}>
            <Icon className={styles.icon} color={colors.iconColor} />
          </Box>
          <Text size="xs" className={styles.title}>
            {title}
          </Text>
        </div>
        <Text fw={600} className={styles.value}>
          {value}
        </Text>
      </Stack>
    </div>
  );
};

export default DataCard;
