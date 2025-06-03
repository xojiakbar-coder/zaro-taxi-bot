import { useEffect, useState } from 'react';
import { useList } from '@/modules/routes';
import { Button } from '@/components/Button';
import { Notification } from '@mantine/core';
import { LuBadgeInfo } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';
import classes from './DriverRoutes.module.scss';
import RoutesCard from '@/components/Card/RoutesCard';
import SpinnerLoader from '@/components/Loader/Spinner';
import { useRide } from '@/modules/driver/hooks/useRide';
import { useDriver } from '@/modules/driver/hooks/useDriver';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';

const DriverRoutes = () => {
  const user = useStoredTelegramUser();
  const { data, fetchData, error } = useRide();
  const [rideError, setRideError] = useState(error);
  const [selectedItem, setSelectItem] = useState<number | null>(null);
  const { data: driver, fetchData: fetchingDriver } = useDriver();
  const { data: routes = [], loading, success } = useList();
  const activeOrder = driver?.recent_rides[0];

  useEffect(() => {
    if (error) {
      setSelectItem(null);
      setRideError(error);
    }
    if (user) fetchingDriver(user?.id);
  }, [user, fetchingDriver, error]);

  const onSubmit = () => {
    if (driver?.id && selectedItem !== null) fetchData(driver.id.toString(), routes[selectedItem].id);
  };

  if (loading && !success) {
    return <SpinnerLoader />;
  }

  if (activeOrder) {
    return <EmptyPage icon={LuBadgeInfo} title="Siz allaqachon aktiv navbat bor" />;
  }

  const successMessage =
    selectedItem !== null && routes[selectedItem]
      ? `${routes[selectedItem].start.name} - ${routes[selectedItem].finish.name}`
      : 'Hozircha tanlanmagan';

  return (
    <div className={classes.container}>
      <div className={classes.title}>Yo‘nalishlar tanlang</div>
      <div className={classes.cardWrapper}>
        {routes.map((item, index) => (
          <div key={item.id}>
            <RoutesCard
              id={item.id}
              start={item.start.name}
              finish={item.finish.name}
              onClick={() => setSelectItem(index)}
              className={selectedItem !== null && routes[selectedItem].id === item.id ? classes.selected : ''}
            />
          </div>
        ))}
      </div>

      {routes.length > 0 && (
        <div className={classes.selectedTextWrapper}>
          <div className={classes.selectedText}>{`Tanlangan yo‘nalish: ${successMessage}`}</div>
          <Button
            height={45}
            className={classes.removeBtn}
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
          className={classes.button}
        >
          Yuborish
        </Button>
      )}
    </div>
  );
};

export default DriverRoutes;
