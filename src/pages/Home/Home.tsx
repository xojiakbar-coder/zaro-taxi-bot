import { useEffect } from 'react';
import Card from '../../components/Card/RoutesCard';
import { useNavigate } from 'react-router-dom';
import { useList } from '../../modules/routes/index';
import SpinnerLoader from '../../components/Loader/Spinner';
import { useTelegramUser } from '@/modules/order/hooks/getUser';

const Home = () => {
  const navigate = useNavigate();
  const user = useTelegramUser();

  const { data, loading } = useList();

  useEffect(() => {}, [user]);

  const handleCardClick = (id: number) => {
    navigate(`/order/${id}`);
    if (id) {
      localStorage.setItem('routeId', `${id}`);
    }
  };

  if (loading) return <SpinnerLoader />;

  return (
    <div className="min-h-max h-max-height overflow-y-auto px-4 py-[38px]">
      <div className="md:text-3xl text-2xl font-bold text-center text-white mb-[36px]">Yo'nalishlar tanlang</div>
      <div className="flex flex-col gap-6 w-full lg:px-56 md:px-10 px-4">
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
