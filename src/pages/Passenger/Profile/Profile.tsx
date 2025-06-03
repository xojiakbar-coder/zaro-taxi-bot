import { useEffect } from 'react';
import { usePassenger } from '@/modules/passenger/hooks/usePassenger';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';

import styles from './Profile.module.scss';
import { Avatar, Text } from '@mantine/core';
import SpinnerLoader from '@/components/Loader/Spinner';
import { Button } from '@/components/Button';

const Profile = () => {
  const user = useStoredTelegramUser();
  const { data, loading, fetchData } = usePassenger();

  useEffect(() => {
    if (user) fetchData(user.id);
  }, [user, fetchData]);

  console.log(data);

  if (loading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={user?.photo_url ?? ''} radius="xl" size="lg" alt="Photo not found" />
        <h2 className={styles.passengerfullName}>{data?.full_name || ''}</h2>
      </div>
      <div className={styles.card}>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Telefon raqami:</Text> {data?.phone_number}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback foiz:</Text> {`${data?.cashback_percentage}%`}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback miqdori:</Text> {`${data?.cashback_amount} so‘m`}
        </div>
      </div>
      <a
        className={styles.cashbackShare}
        href={`https://t.me/share/url?url=https://t.me/pitakuzrobot?start=${data?.promo_code}&text=Link ustiga bosing va mening promokodim orqali cashback oling `}
      >
        <Button variant="subtle">Do'st taklif ishlatish</Button>
      </a>
    </div>
  );
};

export default Profile;
