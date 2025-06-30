import { useState } from 'react';
import { useRoutes } from '@/modules/routes/hooks';
import { Button } from '@/components/Button';
import { LuBadgeInfo, LuNavigation2 } from 'react-icons/lu';
import EmptyPage from '@/components/EmptyPage';
import styles from './Routes.module.scss';
import SpinnerLoader from '@/components/Loader/Spinner';
import RoutesCard from '@/components/Card/RoutesCard/RoutesCard';
import { useCreateRide, useDriver } from '@/modules/driver/hooks';
import { useNavigate } from 'react-router-dom';

const DriverRoutes = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateRide();
  const { driver, isFetched } = useDriver();
  const [selectedItem, setSelectItem] = useState<number | null>(null);
  const { routes, isLoading, isSuccess: isRoutesSuccess } = useRoutes();

  const onSubmit = () => {
    if (driver?.id && selectedItem !== null) {
      mutate({ driverId: driver.id.toString(), routeId: routes[selectedItem].id });
      navigate('/driver/my-orders');
    }
  };

  if (driver?.recentRides[0] && isRoutesSuccess) {
    return <EmptyPage icon={LuBadgeInfo} title="Siz allaqachon aktiv navbat bor" />;
  }

  if (isLoading && isFetched) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Yo‘nalishlar tanlang</div>
      <div className={styles.card_wrapper}>
        {routes.map((item, index) => (
          <div key={item.id}>
            <RoutesCard
              id={item.id}
              start={item.start}
              finish={item.finish}
              onClick={() => setSelectItem(index)}
              className={selectedItem !== null && routes[selectedItem].id === item.id ? styles.selected : ''}
            />
          </div>
        ))}
      </div>

      {routes.length > 0 && (
        <div className={styles.selected_text_wrapper}>
          <div
            className={`${styles.selected_location} ${
              selectedItem !== null && routes[selectedItem] && styles.selected_location_active
            }`}
          >
            <LuNavigation2 />
            <b className={styles.selected_location_label}>Yo‘nalish:</b>
            {selectedItem !== null && routes[selectedItem]
              ? `${routes[selectedItem].start.name} - ${routes[selectedItem].finish.name}`
              : 'Tanlanmagan'}
          </div>

          <Button
            height={40}
            w="max-content"
            className={styles.remove_btn}
            disabled={selectedItem == null}
            onClick={() => setSelectItem(null)}
            variant="gradient"
            gradient={{ from: 'red', to: 'pink', deg: 90 }}
          >
            Olib tashlash
          </Button>
        </div>
      )}

      {routes.length > 0 && (
        <Button height={46} type="button" onClick={onSubmit} className={styles.button} disabled={selectedItem === null}>
          Navbatga Qo‘shish
        </Button>
      )}
    </div>
  );
};

export default DriverRoutes;
