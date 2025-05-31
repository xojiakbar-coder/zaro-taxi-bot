// import { useEffect } from 'react';
import styles from './MyOrders.module.scss';
// import * as Types from '@/modules/order/types';

import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';
import Notification from '@/components/Notification/Notification';
import { useDriver } from '@/modules/driver/hooks/useDriver';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';
import { Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import CompletedOrders from './CompletedOrders';

const MyOrders = () => {
  const user = useStoredTelegramUser();
  const { data, loading, fetchData, error, success } = useDriver();
  const activeOrder = data?.recent_rides[0];

  useEffect(() => {
    fetchData('5317540907');
    console.log(data, user?.id);
  }, [user, fetchData]);

  if (data === null) {
    return (
      <EmptyPage
        internalLink="/driver/new-order"
        title="Hozircha buyurtmalar topilmadi"
        buttonContent="Yangi buyurtma qo‘shish"
        subtitle={`Yangi buyurtma qo‘shish sahifasiga o‘ting`}
      />
    );
  }

  if (loading) return <SpinnerLoader />;

  return (
    <div className={styles.myOrdersWrapper}>
      <Title order={2} className={styles.title}>
        Buyurtmalar ro'yxati
      </Title>
      <Text fw={'600'}>Aktiv buyurtma:</Text>
      {data !== null && (
        <div className={styles.orderCard}>
          <div className={styles.orderItem}>
            <span>Buyurtma ID:</span> {data.id}
          </div>
          <div className={styles.orderItem}>
            <span>Yaratilgan sana:</span> {dayjs(activeOrder?.created_at).format('DD.MM.YYYY')}
          </div>
          <div className={styles.orderItem}>
            <span>Yaratilgan vaqt:</span> {dayjs(activeOrder?.created_at).format('HH:MM')}
          </div>
          <div className={styles.orderItem}>
            <span>Avto turi:</span> {'Cobalt'}
          </div>
          <div className={styles.orderItem}>
            <span>Old o‘rindiq:</span> {true ? 'Ha' : 'Yo‘q'}
          </div>
          <div className={styles.orderItem}>
            <span>To‘lov turi:</span> {'Karta'}
          </div>
          <div className={styles.orderItem}>
            <span>Jo‘nash manzili:</span> {'Toshkent'}
          </div>
          <div className={styles.orderItem}>
            <span>Borish manzili:</span> {'Namangan'}
          </div>
        </div>
      )}
      <Notification open={false} slowHidden withCloseButton={false} message color="green" mt="lg">
        Buyurtma muvaffaqiyatli o‘chirildi.
      </Notification>
      {error && !success && (
        <Notification
          message
          slowHidden
          color="red"
          open={true}
          variant="error"
          withCloseButton={false}
          position="bottom-right"
          title="Xatolik yuz berdi qayt urinib ko‘ring"
        />
      )}
      <div className={styles.compledtedOrders}>
        <CompletedOrders />
      </div>
    </div>
  );
};

export default MyOrders;
