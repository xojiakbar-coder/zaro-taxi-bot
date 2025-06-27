import { useEffect, useState } from 'react';
import { useRoutes } from '@/modules/routes/hooks';
import { Button } from '@/components/Button';
import { Notification } from '@mantine/core';
import { LuBadgeInfo } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';
import styles from './Routes.module.scss';
import RoutesCard from '@/components/Card/RoutesCard/RoutesCard';
import SpinnerLoader from '@/components/Loader/Spinner';
import { useRide } from '@/modules/driver/hooks/useRide';
import { useDriver } from '@/modules/driver/hooks';
import { useStoredUser } from '@/modules/order/hooks';

const DriverRoutes = () => {
  const user = useStoredUser();
  const { item } = useDriver();
  const { data, fetchData, error } = useRide();
  const [rideError, setRideError] = useState(error);
  const [selectedItem, setSelectItem] = useState<number | null>(null);
  const { routes, isLoading, isSuccess } = useRoutes();
  const activeOrder = item?.recentRides[0];

  useEffect(() => {
    if (error) {
      setSelectItem(null);
      setRideError(error);
    }
  }, [user, error]);

  const onSubmit = () => {
    if (item?.id && selectedItem !== null) fetchData(item.id.toString(), routes[selectedItem].id);
  };

  if (activeOrder && isSuccess) {
    return <EmptyPage icon={LuBadgeInfo} title="Siz allaqachon aktiv navbat bor" />;
  }

  if (isLoading) return <SpinnerLoader />;

  const successMessage =
    selectedItem !== null && routes[selectedItem]
      ? `${routes[selectedItem].start.name} - ${routes[selectedItem].finish.name}`
      : 'Hozircha tanlanmagan';

  return (
    <div className={styles.container}>
      <div className={styles.title}>Yo‘nalishlar tanlang</div>
      <div className={styles.cardWrapper}>
        {routes.map((item, index) => (
          <div key={item.id}>
            <RoutesCard
              id={item.id}
              start={item.start.name}
              finish={item.finish.name}
              onClick={() => setSelectItem(index)}
              className={selectedItem !== null && routes[selectedItem].id === item.id ? styles.selected : ''}
            />
          </div>
        ))}
      </div>

      {routes.length > 0 && (
        <div className={styles.selectedTextWrapper}>
          <div className={styles.selectedText}>{`Tanlangan yo‘nalish: ${successMessage}`}</div>
          <Button
            height={45}
            className={styles.removeBtn}
            disabled={selectedItem == null}
            onClick={() => setSelectItem(null)}
          >
            Yo‘nalishni olib tashlash
          </Button>
        </div>
      )}

      {rideError && (
        <Notification
          mt="lg"
          color="red"
          variant="error"
          withCloseButton
          title="Sizda aktiv tarif yo‘q — navbatga turish uchun avval aktiv tarif sotib oling."
        />
      )}

      {data && !error && (
        <Notification
          mt="md"
          color="green"
          variant="success"
          withCloseButton={false}
          title={'Navbat muvaffaqiyatli qo‘shildi'}
        />
      )}

      {routes.length > 0 && (
        <Button
          type="button"
          variant="gradient"
          onClick={onSubmit}
          height={50}
          disabled={selectedItem === null}
          className={styles.button}
        >
          Yuborish
        </Button>
      )}
    </div>
  );
};

export default DriverRoutes;
