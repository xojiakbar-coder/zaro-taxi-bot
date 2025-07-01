import { useState } from 'react';
import * as Types from '@/modules/driver/types';
import styles from './DriverRideCard.module.scss';

import { Badge, Button } from '@mantine/core';

const DriverRideCard = ({
  data,
  mutation
}: {
  data: Types.IEntity.RecentRide;
  mutation: (params: { rideId: number }) => void;
}) => {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDeleteItem = (id: number) => {
    setDeletingId(id);
    mutation({ rideId: id });
  };

  return (
    <div className={styles.card}>
      <div className={styles.top_content_wrapper}>
        <h3 className={styles.title}>Buyurtma ID: {data.id}</h3>
        {data !== null && data.driver && (
          <Badge color="green" className={styles.badge}>
            Aktiv
          </Badge>
        )}
      </div>
      <p>
        <strong>Yaratilgan:</strong> {data.createdAt}
      </p>
      <p>
        <strong>Jo‘nash manzili:</strong> {data.route.start.name}
      </p>
      <p>
        <strong>Borish manzili:</strong> {data.route.finish.name}
      </p>
      {data.bookings.length ? (
        <p>
          <strong>Yo‘lovchilar soni:</strong> {`${data.bookings.length}ta`}
        </p>
      ) : null}

      {data.bookings.length > 0 &&
        data.bookings.map((item: any) => (
          <div className={styles.driverSection} key={item.id}>
            <p>
              <strong>Yo‘lovchi:</strong> {item.passenger.fullName}
            </p>
            <>
              <p>
                <strong>To‘lo‘v turi:</strong> {item.paymentType === 'Cash' ? 'Naqd pul' : 'Kartadan'}
              </p>
              <p>
                <strong>Telefon raqami:</strong> {item.passenger.phoneNumber}
              </p>
            </>
          </div>
        ))}

      {data && (
        <Button
          h={42}
          mt="lg"
          size="sm"
          color="red"
          w="max-content"
          loading={deletingId === +data.id}
          disabled={deletingId === +data.id}
          onClick={() => handleDeleteItem(+data.id)}
        >
          Navbatni bekor qilish
        </Button>
      )}

      {data.bookings.length ? (
        <Button
          h={42}
          size="sm"
          color="teal"
          w="max-content"
          disabled={true}
          loading={!data.id}
          onClick={() => handleDeleteItem(+data.id)}
        >
          Safarni yakunlash
        </Button>
      ) : null}
    </div>
  );
};

export default DriverRideCard;
