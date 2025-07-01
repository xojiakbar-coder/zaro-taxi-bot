import styles from './DataCard.module.scss';
import * as Types from '@/modules/passenger/types';

import { FaMoneyBill, FaTag } from 'react-icons/fa';
import { LuCheck, LuCopy, LuPercent, LuPhone } from 'react-icons/lu';
import { ActionIcon, Box, CopyButton, Flex, Stack, Text } from '@mantine/core';

const DataCard = ({ data }: { data: Types.IEntity.Passenger }) => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.card}>
        <Stack gap={8}>
          <div className={styles.header}>
            <Box className={`${styles.icon_wrapper} ${styles['blue']}`}>
              <LuPhone className={styles.icon} color={'blue'} />
            </Box>
            <Text size="xs" className={styles.title}>
              Telefon raqam
            </Text>
          </div>
          <Text className={styles.value}>{data?.phoneNumber}</Text>
        </Stack>
      </div>

      <div className={styles.divider} />

      <div className={styles.card}>
        <Stack gap={8}>
          <div className={styles.header}>
            <Box className={`${styles.icon_wrapper} ${styles['orange']}`}>
              <LuPercent className={styles.icon} color={'orange'} />
            </Box>
            <Text size="xs" className={styles.title}>
              Cashback foiz
            </Text>
          </div>
          <Text className={styles.value}>{`${data.cashbackPercentage}%`}</Text>
        </Stack>
      </div>

      <div className={styles.divider} />

      <div className={styles.card}>
        <Stack gap={8}>
          <div className={styles.header}>
            <Box className={`${styles.icon_wrapper} ${styles['green']}`}>
              <FaMoneyBill className={styles.icon} color={'green'} />
            </Box>
            <Text size="xs" className={styles.title}>
              Cashback miqdori
            </Text>
          </div>
          <Text className={styles.value}>{`${data.cashbackAmount} so‘m`}</Text>
        </Stack>
      </div>

      <div className={styles.divider} />

      <div className={styles.card}>
        <Stack gap={8}>
          <div className={styles.header}>
            <Box className={`${styles.icon_wrapper} ${styles['pink']}`}>
              <FaTag className={styles.icon} color={'#9c36b5'} />
            </Box>
            <Text size="xs" className={styles.title}>
              Shaxsiy promokod
            </Text>
          </div>
          <Flex justify={'space-between'} className={styles.promocode_copy}>
            <Text className={styles.value}>{data.promoCode}</Text>

            <CopyButton value={data.promoCode}>
              {({ copied, copy }) => (
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                  {copied ? <LuCheck size={16} /> : <LuCopy size={16} />}
                </ActionIcon>
              )}
            </CopyButton>
          </Flex>
        </Stack>
      </div>
    </div>
  );
};

export default DataCard;
