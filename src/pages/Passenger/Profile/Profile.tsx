import styles from './Profile.module.scss';

import { LuBadgeInfo } from 'react-icons/lu';
import { Avatar, Text } from '@mantine/core';
import { Button } from '@/components/Button';

import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';

import { useStoredUser } from '@/modules/order/hooks';
import { usePassenger } from '@/modules/passenger/hooks';

const Profile = () => {
  const user = useStoredUser();
  const { data, isLoading, isError } = usePassenger();

  if (isLoading) return <SpinnerLoader />;

  if ((!data.item && isError) || user === null) {
    return (
      <EmptyPage
        icon={LuBadgeInfo}
        title="Ma'lumotlar topilmadi"
        buttonContent="Biz bilan bog'lanish"
        externalLink="https://t.me/murodov_azizmurod"
        subtitle="Bu holat uchun biz bilan bog'lanishingiz mumkin."
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Avatar src={user?.photo_url} radius="xl" size="lg" alt="Photo not found" />
        <h2 className={styles.passengerfullName}>{data?.item.name || ''}</h2>
      </div>
      <div className={styles.card}>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Telefon raqami:</Text> {data?.item?.phoneNumber}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback foiz:</Text> {`${data.item?.cashbackPercentage}%`}
        </div>
        <div className="flex items-center gap-2">
          <Text fw={'600'}>Cashback miqdori:</Text> {`${data.item?.cashbackAmount} so‘m`}
        </div>
      </div>
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
