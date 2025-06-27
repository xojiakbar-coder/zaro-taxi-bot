import { useEffect } from 'react';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/modules/order/hooks';
import { useRoutes } from '@/modules/routes/hooks';
import SpinnerLoader from '../../components/Loader/Spinner';
import Card from '../../components/Card/RoutesCard/RoutesCard';

const Home = () => {
  const navigate = useNavigate();
  const user = useUser();
  const { routes, isLoading } = useRoutes();

  useEffect(() => {}, [user]);

  const handleCardClick = (id: number) => {
    navigate(`/orders/${id}`);
    if (id) localStorage.setItem('routeId', id.toString());
  };

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Yo'nalishlar tanlang</div>
      <div className={styles.cardWrapper}>
        {routes?.map(item => (
          <Card
            id={item.id}
            key={item.id}
            start={item.start.name}
            finish={item.finish.name}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
