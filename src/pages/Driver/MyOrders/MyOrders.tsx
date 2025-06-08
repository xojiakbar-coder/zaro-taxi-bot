import styles from './MyOrders.module.scss';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import EmptyPage from '@/components/EmptyPage';
// import CompletedOrders from './CompletedOrders';
import SpinnerLoader from '@/components/Loader/Spinner';
import { useDriver } from '@/modules/driver/hooks/useDriver';
import useDeleteRide from '@/modules/driver/hooks/useDelete';
import Notification from '@/components/Notification/Notification';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';
import { Button, Flex, Group, Text, Title, Tree, type TreeNodeData } from '@mantine/core';

const transformBookingsToTreeData = (bookings: any[]): TreeNodeData[] => {
  return bookings?.map(booking => ({
    label: booking.passenger.full_name,
    value: `booking-${booking.id}`,
    children: [
      {
        label: `To‘lov turi: ${booking.payment_type === 'Cash' ? 'Naqd' : 'Kart'}`,
        value: `payment_type-${booking.id}`
      },
      {
        label: `Jo‘nash vaqti: ${dayjs(booking.date_of_departure).format('YYYY-MM-DD HH:mm')}`,
        value: `date_of_departure-${booking.id}`
      },
      { label: `Qo‘shimcha yuk: ${booking.extra_luggage || 'Yo‘q'}`, value: `extra_luggage-${booking.id}` },
      { label: `Telefon raqam: ${booking.passenger.phone_number || 'Topilmadi'}`, value: `phone-${booking.id}` }
    ]
  }));
};

const MyOrders = () => {
  const user = useStoredTelegramUser();
  const { data, loading, fetchData, error, success } = useDriver();
  const { deleteOrder, success: deleteSuccess } = useDeleteRide();
  const [activeOrder, setActiveOrder] = useState<any>(null);
  const bookings = transformBookingsToTreeData(activeOrder?.bookings);

  useEffect(() => {
    if (user) fetchData();
  }, [user, fetchData]);

  useEffect(() => {
    if ((data?.recent_rides ?? []).length > 0) {
      setActiveOrder((data?.recent_rides ?? [])[0]);
    } else {
      setActiveOrder(null);
    }
  }, [data]);

  const handleDelete = async (ride_id: number) => {
    await deleteOrder(user?.id ?? '', ride_id);
    fetchData();
  };

  if (!activeOrder && !loading) {
    return (
      <EmptyPage
        internalLink="/driver/new-order"
        title="Hozircha aktiv navbat yo‘q"
        buttonContent="Yangi buyurtma qo‘shish"
      />
    );
  }

  if (loading) return <SpinnerLoader />;

  return (
    <div className={styles.myOrdersWrapper}>
      <Title order={2} className={styles.title}>
        Buyurtmalar ro'yxati
      </Title>
      {activeOrder && <Text fw={'600'}>Aktiv buyurtma:</Text>}
      {activeOrder && (
        <div className={styles.orderCard}>
          <div className={styles.orderItem}>
            <span>Buyurtma ID:</span> {activeOrder.id}
          </div>
          <div className={styles.orderItem}>
            <span>Yaratilgan sana:</span> {dayjs(activeOrder.created_at).format('YYYY-MM-DD')}
          </div>
          <div className={styles.orderItem}>
            <span>Yaratilgan vaqt:</span> {dayjs(activeOrder.created_at).format('HH:mm:ss')}
          </div>
          <div className={styles.orderItem}>
            <span>Jo‘nash manzili:</span> {activeOrder.route?.start?.name || ''}
          </div>
          <div className={styles.orderItem}>
            <span>Borish manzili:</span> {activeOrder.route?.finish?.name || ''}
          </div>
          {bookings.length > 0 && (
            <div className={styles.orderItem}>
              <span>Yo‘lovchilar:</span>
              <Tree
                my="sm"
                data={bookings}
                levelOffset={35}
                renderNode={({ node, expanded, hasChildren, elementProps }) => (
                  <div
                    {...elementProps}
                    style={{
                      marginBottom: 16,
                      ...(elementProps.style || {})
                    }}
                  >
                    <Group gap={10}>
                      {hasChildren && (
                        <FaChevronDown size={16} style={{ transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)' }} />
                      )}
                      <Text>{node.label}</Text>
                    </Group>
                  </div>
                )}
              />
            </div>
          )}
          <Flex direction={'column'}>
            <Button
              size="sm"
              color="red"
              w={'max-content'}
              className="mt-[14px]"
              disabled={activeOrder?.bookings[0]}
              onClick={() => handleDelete(activeOrder?.id)}
            >
              O‘chirish
            </Button>
            <Button
              size="sm"
              color="yellow"
              w={'max-content'}
              className="mt-[14px]"
              disabled={!activeOrder?.is_completed}
              onClick={() => handleDelete(activeOrder?.id)}
            >
              Safar yakunlanlash
            </Button>
          </Flex>
        </div>
      )}
      {deleteSuccess && (
        <Notification open={false} slowHidden withCloseButton={false} message color="green" mt="lg">
          Buyurtma muvaffaqiyatli o‘chirildi.
        </Notification>
      )}
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

      {/* <div className={styles.compledtedOrders}>
        <CompletedOrders />
      </div> */}
    </div>
  );
};

export default MyOrders;
