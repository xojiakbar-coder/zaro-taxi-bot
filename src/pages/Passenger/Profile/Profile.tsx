import { useEffect } from 'react';
import { usePassenger } from '@/modules/passenger/hooks/usePassenger';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';

import styles from './Profile.module.scss';
import { Avatar, Text } from '@mantine/core';
import SpinnerLoader from '@/components/Loader/Spinner';

const Profile = () => {
  const user = useStoredTelegramUser();
  const {
    data,
    loading,
    fetchData
    //  success, error,
  } = usePassenger();

  useEffect(() => {
    if (user) fetchData(user.id);
  }, [user, fetchData]);

  if (loading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={user?.photo_url ?? ''} radius="xl" size="lg" alt="Photo not found" />
        <h2 className={styles.name}>{user?.first_name || ''}</h2>
      </div>
      <div className={styles.card}>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Username:</Text> {data?.full_name ?? 'Eshmat Toshmatov'}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Telefon raqami:</Text> {data?.full_name ?? '+998 99 991-90-91'}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback foiz:</Text> {data?.full_name ?? '5%'}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback miqdori:</Text> {data?.full_name ?? '32.000'}
        </div>
      </div>
    </div>
  );
};

export default Profile;
