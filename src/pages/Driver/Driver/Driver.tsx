import { Avatar } from '@mantine/core';
import styles from './Driver.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

import { LuPhoneCall, LuPlus } from 'react-icons/lu';

import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';
import useDriver from '@/modules/driver/hooks/useDriver';

import { useUser } from '@/modules/order/hooks';
import { DrvierDataCard } from '@/components/Card/DriverDataCard';

const Driver = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { driver, isLoading, isFetched } = useDriver();

  if (driver.carModelName == '' && driver.carModelName == '' && isFetched) {
    return (
      <EmptyPage
        title="Sizning ma'lumotlaringiz topilmadi"
        buttonContent="Biz bilan bog'lanish"
        externalLink="https://t.me/murodov_azizmurod"
        subtitle="Bu holat uchun biz bilan bog'lanishingiz mumkin."
      />
    );
  }

  if (isLoading) return <SpinnerLoader />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.header}>
          {user?.photo_url && <Avatar src={user.photo_url} radius="xl" size="lg" />}
          {!user?.photo_url && (
            <Avatar radius="xl" size="lg" color="indigo">
              {user?.first_name?.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <h2 className={styles.name}>{user?.first_name}</h2>
        </div>

        <DrvierDataCard data={driver} />

        <div className={styles.actions}>
          <Button
            h={44}
            className={styles.button}
            leftSection={<LuPhoneCall size={16} />}
            gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
          >
            Bog‘lanish
          </Button>

          <Button
            h={44}
            className={styles.button}
            leftSection={<LuPlus size={20} />}
            onClick={() => navigate('/driver/change-tariff')}
            gradient={{ from: 'indigo', to: 'violet', deg: 90 }}
          >
            {driver?.currentTariff ? 'Tarifni almashtirish' : 'Tarif sotib olish'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Driver;
