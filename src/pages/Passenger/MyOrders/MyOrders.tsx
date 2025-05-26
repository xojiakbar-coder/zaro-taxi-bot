import { useEffect } from 'react';
import styles from './MyOrders.module.scss';
import * as Types from '@/modules/order/types';
import SpinnerLoader from '@/components/Loader/Spinner';

import { Button } from '@/components/Button';
import EmptyPage from '@/components/EmptyPage';
import Notification from '@/components/Notification/Notification';

import useList from '@/modules/myorders/hooks/useList';
import useDeleteOrder from '@/modules/myorders/hooks/useDelete';

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
    <div className={styles.myOrdersWrapper}>
      {success &&
        data.length > 0 &&
        data.map(item => (
          <div key={item.id} className={styles.orderCard}>
            <div className={styles.orderItem}>
              <span>Buyurtma ID:</span> {item.id}
            </div>
            <div className={styles.orderItem}>
              <span>Yaratilgan:</span> {item.created_at}
            </div>
            <div className={styles.orderItem}>
              <span>Jo‘nash sanasi:</span> {item.date_of_departure}
            </div>
            <div className={styles.orderItem}>
              <span>Avto turi:</span> {item.car_type}
            </div>
            <div className={styles.orderItem}>
              <span>Old o‘rindiq:</span> {item.front_seat ? 'Ha' : 'Yo‘q'}
            </div>
            <div className={styles.orderItem}>
              <span>To‘lov turi:</span> {item.payment_type}
            </div>
            <div className={styles.orderItem}>
              <span>Jo‘nash manzili:</span> {item?.route?.start?.name ?? ''}
            </div>
            <div className={styles.orderItem}>
              <span>Borish manzili:</span> {item?.route?.finish?.name ?? ''}
            </div>

            <Button color="red" size="xs" className="mt-[14px]" onClick={() => handleDelete(item?.id)}>
              O‘chirish
            </Button>
          </div>
        ))}

      {deleteSuccess && (
        <Notification slowHidden withCloseButton={false} message color="green" mt="lg">
          Buyurtma muvaffaqiyatli o‘chirildi.
        </Notification>
      )}
      {error && !!data.length && (
        <Notification
          message
          color="red"
          variant="error"
          withCloseButton
          title="Xatolik yuz berdi qayt urinib ko‘ring"
        />
      )}
    </div>
  );
};

export default MyOrders;
