import styles from './MyOrders.module.scss';
import { useDelete, useList } from '@/modules/myorders/hooks';

import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';
import { OrderCard } from '@/components/Card/OrderCard';

const MyOrders = () => {
  const { items, isLoading, isSuccess, isFetched } = useList();
  const { mutate } = useDelete();

  if (isLoading && isFetched) return <SpinnerLoader />;

  if (!isLoading && items.length === 0)
    return <EmptyPage internalLink="/" title="Hozircha buyurtmalar yo‘q" buttonContent="Yangi buyurtma berish" />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Buyurtmalaringiz ro'yxati</div>
      <div className={styles.myOrdersWrapper}>
        {isSuccess &&
          items.length > 0 &&
          items.map(item => {
            return <OrderCard key={item.id} data={item} mutation={mutate} />;
          })}
      </div>
    </div>
  );
};

export default MyOrders;
