import { useEffect, useState } from 'react';
import styles from './Routes.module.scss';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from '@/modules/routes/hooks';
import { useCreateRide, useDriver } from '@/modules/driver/hooks';

import { Button } from '@/components/Button';
import EmptyPage from '@/components/EmptyPage';
import Title from '@/components/PageTitle/Title';
import SpinnerLoader from '@/components/Loader/Spinner';
import { LuBadgeInfo, LuNavigation2 } from 'react-icons/lu';
import RoutesCard from '@/components/Card/RoutesCard/RoutesCard';

const DriverRoutes = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateRide();
  const [allRidesIsCompleted, setAllRidesIsCompleted] = useState(false);
  const { driver, isFetched } = useDriver();
  const [selectedItem, setSelectItem] = useState<number | null>(null);
  const { routes, isLoading } = useRoutes();

  const onSubmit = () => {
    if (driver?.id && selectedItem !== null) {
      mutate({ driverId: driver.id.toString(), routeId: routes[selectedItem].id });
      navigate('/driver/my-orders');
    }
  };

  useEffect(() => {
    const riedes = driver?.recentRides.find(items => items.isCompleted === true);
    if (riedes) setAllRidesIsCompleted(true);
  }, [driver?.recentRides[0]]);

  if (driver?.recentRides[0] && !allRidesIsCompleted && !isFetched) {
    return <EmptyPage icon={LuBadgeInfo} title="Siz allaqachon aktiv navbat bor" />;
  }

  if (isLoading && isFetched) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <Title>Yo‘nalishlar tanlang</Title>
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
