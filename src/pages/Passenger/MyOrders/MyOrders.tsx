import styles from './MyOrders.module.scss';
import { useDelete, useList } from '@/modules/myorders/hooks';

import { Title } from '@mantine/core';
import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';
import { OrderCard } from '@/components/Card/OrderCard';

const MyOrders = () => {
  const { items, isLoading, isSuccess } = useList();
  const { mutate } = useDelete();

  if (isLoading) return <SpinnerLoader />;

  if (!isLoading && items.length === 0)
    return <EmptyPage internalLink="/" title="Hozircha buyurtmalar yo‘q" buttonContent="Yangi buyurtma berish" />;

  return (
    <div className={styles.container}>
      <Title order={2} className={styles.title}>
        Buyurtmalaringiz ro'yxati
      </Title>
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
