import styles from './Home.module.scss';

import { useNavigate } from 'react-router-dom';
import { useRoutes } from '@/modules/routes/hooks';

import SpinnerLoader from '../../components/Loader/Spinner';
import Card from '../../components/Card/RoutesCard/RoutesCard';
import { useUser } from '@/modules/order/hooks';
import { useEffect } from 'react';

const Home = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { routes, isLoading } = useRoutes();

  const handleCardClick = (id: number) => {
    navigate(`/orders/${id}`);
    if (id) localStorage.setItem('routeId', id.toString());
  };

  useEffect(() => {}, [user]);

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Yo'nalishlar tanlang</div>
      <div className={styles.card_wrapper}>
        {routes?.map(item => (
          <Card
            id={item.id}
            key={item.id}
            start={item.start}
            finish={item.finish}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
