import { Title } from '@mantine/core';
import EmptyPage from '@/components/EmptyPage';

import styles from './MyOrders.module.scss';

const CompletedOrders = () => {
  return (
    <div>
      <Title order={3} className={styles.title}>
        Buyurtmalar tarixi
      </Title>
      <div className="flex justify-center items-center h-full pt-6">
        <EmptyPage title="Hozircha bajarilgan buyurtmalaringiz yo‘q" />
      </div>
    </div>
  );
};

export default CompletedOrders;
