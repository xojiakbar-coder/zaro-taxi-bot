import { useEffect, useState } from 'react';
import { useList } from '@/modules/routes';
import { Button } from '@/components/Button';
import classes from './DriverRoutes.module.scss';
import RoutesCard from '@/components/Card/RoutesCard';
import SpinnerLoader from '@/components/Loader/Spinner';
import { useRide } from '@/modules/driver/hooks/useRide';
import Notification from '@/components/Notification/Notification';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';
import { useDriver } from '@/modules/driver/hooks/useDriver';

const DriverRoutes = () => {
  const user = useStoredTelegramUser();
  const [selectedItem, setSelectItem] = useState<number | null>(null);
  const { data, loading, fetchData, success } = useRide();
  const { data: driver, fetchData: fetchingDriver } = useDriver();
  const { data: routes = [] } = useList();

  useEffect(() => {
    if (user) fetchingDriver(user?.id);
  }, [user, fetchingDriver]);

  const onSubmit = () => {
    if (driver?.id && selectedItem !== null) {
      fetchData(driver?.id.toString(), routes[selectedItem].id);
    }
  };

  if (loading && !success) return <SpinnerLoader />;

  const successMessage =
    selectedItem !== null && routes[selectedItem]
      ? `${routes[selectedItem].start.name} - ${routes[selectedItem].finish.name} Yo'nalishi tanlandi!`
      : '';

  return (
    <div className={classes.container}>
      <div className={classes.title}>Yo'nalishlar tanlang</div>
      <div className={classes.cardWrapper}>
        {routes.map((item, index) => (
          <RoutesCard
            id={item.id}
            key={item.id}
            start={item.start.name}
            finish={item.finish.name}
            onClick={() => setSelectItem(index)}
            className={selectedItem !== null && routes[selectedItem].id === item.id ? classes.selected : ''}
          />
        ))}
      </div>
      {routes.length > 0 && (
        <Button onClick={onSubmit} height={50} disabled={selectedItem === null} className={classes.button}>
          Yuborish
        </Button>
      )}

      <Notification open={!!data?.length} title={data} />

      <Notification
        slowHidden
        variant="success"
        position="top-right"
        title={successMessage}
        withCloseButton={false}
        open={selectedItem !== null}
      />
    </div>
  );
};

export default DriverRoutes;
