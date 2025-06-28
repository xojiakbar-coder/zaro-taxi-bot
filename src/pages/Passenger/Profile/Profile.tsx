import styles from './Profile.module.scss';

import { Button } from '@/components/Button';
import { Avatar, SimpleGrid } from '@mantine/core';
import { FaMoneyBill, FaTag } from 'react-icons/fa';
import { LuPercent, LuPhone } from 'react-icons/lu';

import { DataCard } from '@/components/Card/DataCard';
import SpinnerLoader from '@/components/Loader/Spinner';

import { useStoredUser } from '@/modules/order/hooks';
import { usePassenger } from '@/modules/passenger/hooks';

const Profile = () => {
  const userPhoto = useStoredUser()?.photo_url;
  const { data, isLoading } = usePassenger();

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={userPhoto} radius="xl" size="lg" alt="Photo not found" />
        <h2 className={styles.passengerfullName}>{data?.item.name || ''}</h2>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        <DataCard
          icon={LuPhone}
          title="Telefon raqam"
          value={data?.item.phoneNumber}
          colors={{ iconBgColor: 'blue', iconColor: 'blue' }}
        />
        <DataCard
          icon={LuPercent}
          title="Cashback foiz"
          value={`${data.item.cashbackPercentage}%`}
          colors={{ iconBgColor: 'orange', iconColor: 'orange' }}
        />
        <DataCard
          icon={FaMoneyBill}
          title="Cashback miqdori"
          value={`${data.item.cashbackAmount} so‘m`}
          colors={{ iconBgColor: 'green', iconColor: 'green' }}
        />
        <DataCard
          icon={FaTag}
          title="Shaxsiy promokod"
          value={data.item.promoCode}
          colors={{ iconBgColor: 'green', iconColor: 'green' }}
        />
      </SimpleGrid>
      <a
        className={styles.cashbackShare}
        href={`https://t.me/share/url?url=https://t.me/pitakuzrobot?start=${data?.item?.promoCode}&text=Link ustiga bosing va mening promokodim orqali cashback oling`}
      >
        <Button variant="subtle">Do'st taklif qilish</Button>
      </a>
    </div>
  );
};

export default Profile;
