import dayjs from 'dayjs';
import React from 'react';
import CarData from './CarData';
import { Badge, Box, Flex, Group, Stack, Text } from '@mantine/core';

import { LuCalendarCheck } from 'react-icons/lu';
import styles from './DrvierDataCard.module.scss';

type DataCardProps = {
  data: any;
};

const DrvierDataCard: React.FC<DataCardProps> = ({ data }) => {
  return (
    <div className={styles.outer_container}>
      {data.currentTariff !== null && (
        <div className={styles.card}>
          <Stack gap={8}>
            <div className={styles.header}>
              <Box className={`${styles.icon_wrapper} ${styles['indigo']}`}>
                <LuCalendarCheck className={styles.icon} color={'indigo'} />
              </Box>
              <Text size="xs" className={styles.title}>
                Faol tarif ma'lumotlari
              </Text>
            </div>
            <Flex direction="column">
              <Flex justify="space-between">
                <Group gap={7}>
                  <Text className={styles.label}>Nomi:</Text>
                  <Text className={styles.value}>{data?.currentTariff.selectedTariff.name}</Text>
                </Group>
                <Badge color="teal" mt={'8.3px'} className={styles.badge_label}>
                  Aktiv
                </Badge>
              </Flex>
              <Group gap={7}>
                <Text className={styles.label}>Muddati:</Text>
                <Text className={styles.value}>
                  {`${dayjs(data.currentTariff.tariffEnd).diff(dayjs(), 'day')} kun qoldi`}
                </Text>
              </Group>
              <Group gap={7}>
                <Text className={styles.label}>Narxi:</Text>
                <Text className={styles.value}>{`${data?.currentTariff?.selectedTariff.price} so‘m`}</Text>
              </Group>
            </Flex>
          </Stack>
        </div>
      )}

      {data && <CarData carNumber={data.carNumber} carModelName={data.carModelName} />}
    </div>
  );
};

export default DrvierDataCard;
