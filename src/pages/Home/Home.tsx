import { useEffect } from 'react';
import classes from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useList } from '../../modules/routes/';
import Card from '../../components/Card/RoutesCard';
import SpinnerLoader from '../../components/Loader/Spinner';
import { useTelegramUser } from '@/modules/order/hooks/getUser';

const Home = () => {
  const navigate = useNavigate();
  const user = useTelegramUser();
  const { data, loading } = useList();

  useEffect(() => {}, [user]);

  const handleCardClick = (id: number) => {
    navigate(`/orders/${id}`);
    if (id) localStorage.setItem('routeId', id.toString());
  };

  if (loading) return <SpinnerLoader />;

  return (
    <div className={classes.container}>
      <div className={classes.title}>Yo'nalishlar tanlang</div>
      <div className={classes.cardWrapper}>
        {data?.map(item => (
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
