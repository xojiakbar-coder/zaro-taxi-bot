import { useState } from 'react';
import styles from './MyOrders.module.scss';
import * as DriverType from '@/modules/order/types';
import SpinnerLoader from '@/components/Loader/Spinner';

import { Button } from '@/components/Button';
import EmptyPage from '@/components/EmptyPage';

import dayjs from 'dayjs';
import { FaChevronDown } from 'react-icons/fa';
import { useDelete, useList } from '@/modules/myorders/hooks';
import { Group, Text, Title, Tree, type TreeNodeData } from '@mantine/core';

const transformBookingsToTreeData = (relatedRide: DriverType.IEntity.IRide): TreeNodeData[] => {
  return [
    {
      label: relatedRide.driver.fullName,
      value: `item-${relatedRide.id}`,
      children: [
        {
          label: `Mashina raqami: ${relatedRide.driver.carNumber}`,
          value: `date_of_departure-${relatedRide.id}`
        },
        {
          label: `Mashina turi: ${relatedRide.driver.carModelName}`,
          value: `car_type-${relatedRide.id}`
        },
        {
          label: `Telefon raqam: ${relatedRide.driver?.phoneNumber || 'Topilmadi'}`,
          value: `phone-${relatedRide.id}`
        }
      ]
    }
  ];
};

const MyOrders = () => {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const { items, isLoading, isSuccess } = useList();
  const { mutate, isPending } = useDelete();

  if (isLoading) return <SpinnerLoader />;

  if (!isLoading && items.length === 0) {
    return (
      <EmptyPage
        internalLink="/"
        title="Hozircha buyurtmalar topilmadi"
        buttonContent="Yangi buyurtma qo‘shish"
        subtitle={`Yangi buyurtma qo‘shish sahifasiga o‘ting`}
      />
    );
  }

  return (
    <div className={styles.container}>
      <Title order={2} className={styles.title}>
        Buyurtmalaringiz ro'yxati
      </Title>
      <div className={styles.myOrdersWrapper}>
        {isSuccess &&
          items.length > 0 &&
          items.map(item => (
            <div key={item.id} className={styles.orderCard}>
              <div className={styles.orderItem}>
                <span>Buyurtma ID:</span> {item.id}
              </div>
              <div className={styles.orderItem}>
                <span>Yaratilgan:</span>{' '}
                {`${dayjs(item.createdAt).format('YYYY-MM-DD')} - ${dayjs(item.createdAt).format('HH:mm:ss')}`}
              </div>
              <div className={styles.orderItem}>
                <span>Jo‘nash sanasi:</span>{' '}
                {`${dayjs(item.dateOfDeparture).format('YYYY-MM-DD')} - ${dayjs(item.dateOfDeparture).format(
                  'HH:mm:ss'
                )}`}
              </div>
              <div className={styles.orderItem}>
                <span>Avto turi:</span> {item.carType}
              </div>
              <div className={styles.orderItem}>
                <span>Old o‘rindiq:</span> {item.frontSeat ? 'Ha' : 'Yo‘q'}
              </div>
              <div className={styles.orderItem}>
                <span>To‘lov turi:</span> {item.paymentType === 'Cash' ? 'Naqd' : 'Kartadan'}
              </div>
              <div className={styles.orderItem}>
                <span>Jo‘nash manzili:</span> {item?.route?.start?.name ?? ''}
              </div>
              <div className={styles.orderItem}>
                <span>Borish manzili:</span> {item?.route?.finish?.name ?? ''}
              </div>
              <div className={styles.orderItem}>
                <span>Haydo‘vchi:</span>
                {item.relatedRide !== null ? (
                  <Tree
                    my="sm"
                    data={transformBookingsToTreeData(item.relatedRide)}
                    levelOffset={25}
                    renderNode={({ node, expanded, hasChildren, elementProps }) => (
                      <div
                        {...elementProps}
                        style={{
                          marginBottom: 16,
                          ...(elementProps.style || {})
                        }}
                      >
                        <Group gap={8}>
                          {hasChildren && (
                            <FaChevronDown
                              size={16}
                              style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)' }}
                            />
                          )}
                          <Text>{node.label}</Text>
                        </Group>
                      </div>
                    )}
                  />
                ) : (
                  <Text>Biriktirilmagan</Text>
                )}
              </div>

              <Button
                color="red"
                size="sm"
                className="mt-[14px]"
                loading={deletingId === +item.id && !isPending}
                disabled={deletingId === +item.id && !isPending}
                onClick={() => {
                  setDeletingId(+item.id);
                  mutate({ id: +item.id });
                }}
              >
                O‘chirish
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
