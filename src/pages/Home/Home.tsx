import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useLocation } from 'react-router-dom';
import { useList } from '../../modules/routes/index';
import SpinnerLoader from '../../components/Loader/Spinner';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, loading } = useList();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('telegram_id');

  const handleCardClick = (id: number) => {
    navigate(`/order/${id}`);
  };

  useEffect(() => {
    const hash = location.hash;
    console.log(hash, id);
    const rawData = hash.replace('#tgWebAppData=', '');
    const decoded = decodeURIComponent(rawData);
    alert(`Decoded hash: ${decoded}`);

    const params = new URLSearchParams(decoded);
    const userRaw = params.get('user');

    if (userRaw) {
      const userJson = decodeURIComponent(userRaw);
      const user = JSON.parse(userJson);
      alert(`User object: ${String(user.id)}`);
    }
  }, [location]);

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
