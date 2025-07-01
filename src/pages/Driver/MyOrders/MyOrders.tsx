import styles from './MyOrders.module.scss';

import { useDriver } from '@/modules/driver/hooks';
import useDeleteRide from '@/modules/driver/hooks/useDelete';

import EmptyPage from '@/components/EmptyPage';
import Title from '@/components/PageTitle/Title';
import SpinnerLoader from '@/components/Loader/Spinner';
import DriverRideCard from '@/components/Card/DriverRideCard/DriverRideCard';
import { useEffect } from 'react';

const MyOrders = () => {
  const { mutate } = useDeleteRide();
  const { driver, isLoading, isFetched } = useDriver();

  useEffect(() => {}, [driver.recentRides]);

  if (isFetched && driver.recentRides.length === 0) {
    return (
      <EmptyPage
        internalLink="/driver/new-order"
        title="Hozircha aktiv navbat yo‘q"
        buttonContent="Yangi buyurtma qo‘shish"
      />
    );
  }

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.myOrdersWrapper}>
      <Title>Buyurtmalar ro'yxati</Title>

      <div className={styles.myOrdersWrapper}>
        {driver.recentRides[0] && <DriverRideCard data={driver.recentRides[0]} mutation={mutate} />}
      </div>
    </div>
  );
};

export default MyOrders;
