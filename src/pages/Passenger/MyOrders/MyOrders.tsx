import { useEffect } from 'react';
import styles from './MyOrders.module.scss';
import * as Types from '@/modules/order/types';
import SpinnerLoader from '@/components/Loader/Spinner';

import { Button } from '@/components/Button';
import EmptyPage from '@/components/EmptyPage';
import Notification from '@/components/Notification/Notification';

import dayjs from 'dayjs';
import useList from '@/modules/myorders/hooks/useList';
import { Group, Text, Title, Tree, type TreeNodeData } from '@mantine/core';
import useDeleteOrder from '@/modules/myorders/hooks/useDelete';
import { FaChevronDown } from 'react-icons/fa';

const transformBookingsToTreeData = (item: Types.IEntity.MyOrders): TreeNodeData[] => {
  if (!item?.related_ride) {
    return [
      {
        label: 'Hozircha biriktirilmagan',
        value: `unassigned-${item.id}`
      }
    ];
  }

  return [
    {
      label: item?.related_ride.driver.full_name,
      value: `item-${item.id}`,
      children: [
        {
          label: `Mashina raqami: ${item.related_ride.driver.car_number}`,
          value: `date_of_departure-${item.id}`
        },
        {
          label: `Mashina turi: ${item.related_ride.driver.car_model}`,
          value: `car_type-${item.id}`
        },
        {
          label: `Telefon raqam: ${item?.related_ride.driver?.phone_number || 'Topilmadi'}`,
          value: `phone-${item.id}`
        }
      ]
    }
  ];
};

const MyOrders = () => {
  const userStr = localStorage.getItem('telegramUser');
  const user: Types.IEntity.User | null = userStr ? JSON.parse(userStr) : null;
  const { data, error, loading, success, fetchData } = useList();
  const { deleteOrder, success: deleteSuccess } = useDeleteOrder();

  useEffect(() => {
    if (user) fetchData(user?.id);
  }, [user?.id ?? '']);

  const handleDelete = async (orderId: string) => {
    await deleteOrder(user?.id ?? '', orderId);
    fetchData(user?.id ?? '');
  };

  if (loading) return <SpinnerLoader />;
  if ((!success || success) && !data.length) {
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
        {success &&
          data.length > 0 &&
          data.map(item => (
            <div key={item.id} className={styles.orderCard}>
              <div className={styles.orderItem}>
                <span>Buyurtma ID:</span> {item.id}
              </div>
              <div className={styles.orderItem}>
                <span>Yaratilgan:</span>{' '}
                {`${dayjs(item.created_at).format('YYYY-MM-DD')} - ${dayjs(item.created_at).format('HH:mm:ss')}`}
              </div>
              <div className={styles.orderItem}>
                <span>Jo‘nash sanasi:</span>{' '}
                {`${dayjs(item.date_of_departure).format('YYYY-MM-DD')} - ${dayjs(item.date_of_departure).format(
                  'HH:mm:ss'
                )}`}
              </div>
              <div className={styles.orderItem}>
                <span>Avto turi:</span> {item.car_type}
              </div>
              <div className={styles.orderItem}>
                <span>Old o‘rindiq:</span> {item.front_seat ? 'Ha' : 'Yo‘q'}
              </div>
              <div className={styles.orderItem}>
                <span>To‘lov turi:</span> {item.payment_type === 'Cash' ? 'Naqd' : 'Kartadan'}
              </div>
              <div className={styles.orderItem}>
                <span>Jo‘nash manzili:</span> {item?.route?.start?.name ?? ''}
              </div>
              <div className={styles.orderItem}>
                <span>Borish manzili:</span> {item?.route?.finish?.name ?? ''}
              </div>
              <div className={styles.orderItem}>
                <span>Haydo‘vchi:</span>
                <Tree
                  my="sm"
                  data={transformBookingsToTreeData(item)}
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
              </div>

              <Button color="red" size="sm" className="mt-[14px]" onClick={() => handleDelete(item?.id)}>
                O‘chirish
              </Button>
            </div>
          ))}

        {deleteSuccess && (
          <Notification withCloseButton={false} message color="green" mt="lg">
            Buyurtma muvaffaqiyatli o‘chirildi.
          </Notification>
        )}
        {error && !!data.length && (
          <Notification color="red" variant="error" withCloseButton title="Xatolik yuz berdi qayt urinib ko‘ring" />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
