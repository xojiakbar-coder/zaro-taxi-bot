import { useEffect } from 'react';
import SpinnerLoader from '@/components/Loader/Spinner';
import { Button, Text } from '@mantine/core';

import classes from './MyOrders.module.scss';
import useList from '@/modules/myorders/hooks/useList';
import useDeleteOrder from '@/modules/myorders/hooks/useDelete';
import Notification from '@/components/Notification';
import { LuInbox } from 'react-icons/lu';

const telegramUserId = localStorage.getItem('telegramUserId');

const MyOrders = () => {
  const { data, error, loading, success, fetchData } = useList();
  const { deleteOrder, success: deleteSuccess } = useDeleteOrder();

  useEffect(() => {
    fetchData(telegramUserId ?? '');
  }, [telegramUserId]);

  if (loading) return <SpinnerLoader />;

  const handleDelete = async (orderId: string) => {
    await deleteOrder(telegramUserId ?? '', orderId);
    fetchData(telegramUserId ?? '');
  };
  console.log(data);

  return (
    <div className={classes.myOrdersWrapper}>
      {success && data.length > 0 ? (
        data.map(item => (
          <div key={item.id} className={classes.orderCard}>
            <div className={classes.orderItem}>
              <span>Buyurtma ID:</span> {item.id}
            </div>
            <div className={classes.orderItem}>
              <span>Yaratilgan:</span> {item.created_at}
            </div>
            <div className={classes.orderItem}>
              <span>Jo‘nash sanasi:</span> {item.date_of_departure}
            </div>
            <div className={classes.orderItem}>
              <span>Avto turi:</span> {item.car_type}
            </div>
            <div className={classes.orderItem}>
              <span>Old o‘rindiq:</span> {item.front_seat ? 'Ha' : 'Yo‘q'}
            </div>
            <div className={classes.orderItem}>
              <span>To‘lov turi:</span> {item.payment_type}
            </div>
            <div className={classes.orderItem}>
              <span>Jo‘nash manzili:</span> {item?.route?.start?.name ?? ''}
            </div>
            <div className={classes.orderItem}>
              <span>Borish manzili:</span> {item?.route?.finish?.name ?? ''}
            </div>

            <Button color="red" size="xs" className="mt-[14px]" onClick={() => handleDelete(item.id)}>
              O‘chirish
            </Button>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center gap-[10px] h-[75dvh]">
          <LuInbox className="text-white text-[34px]" />
          <Text size="lg" className="text-center font-semibold">
            Hozircha buyurtmalar topilmadi.
          </Text>
        </div>
      )}
      {deleteSuccess && (
        <Notification slowHidden color="green">
          Buyurtma muvaffaqiyatli o‘chirildi.
        </Notification>
      )}
      {error && !!data.length && (
        <Notification slowHidden variant="error" color="red" title="Xatolik yuz berdi qayt urinib ko‘ring" />
      )}
    </div>
  );
};

export default MyOrders;
