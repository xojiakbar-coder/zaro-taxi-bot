// styles
import styles from './Home.module.scss';

import { useEffect } from 'react';
import { useUser } from '@/modules/order/hooks';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from '@/modules/routes/hooks';

// components
import Title from '@/components/PageTitle/Title';
import SpinnerLoader from '../../components/Loader/Spinner';
import Card from '../../components/Card/RoutesCard/RoutesCard';

const Home = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { routes, isLoading } = useRoutes();

  const handleCardClick = (id: number) => {
    navigate(`/orders/${id}`);
    if (id) localStorage.setItem('routeId', id.toString());
  };

  useEffect(() => {
    window.alert(`'user', ${user}`);
    window.alert(`debug: ${user?.degug}, id: ${user?.id}`);
  }, [user]);

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <Title>Yo'nalishlar tanlang</Title>
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
