import { useEffect } from 'react';
import classes from './Driver.module.scss';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card } from '@mantine/core';
import Button from '@/components/Button/Button';

import { FaRegCalendarCheck } from 'react-icons/fa';
import { LuCarFront, LuPhone } from 'react-icons/lu';

import SpinnerLoader from '@/components/Loader/Spinner';
import { useDriver } from '@/modules/driver/hooks/useDriver';
import { useStoredTelegramUser } from '@/modules/order/hooks/getStoredUser';
import dayjs from 'dayjs';

const Driver = () => {
  const navigate = useNavigate();
  const user = useStoredTelegramUser();
  const { data, loading, fetchData } = useDriver();

  useEffect(() => {
    if (user) fetchData(user?.id);
  }, [user, fetchData]);

  if (loading) return <SpinnerLoader />;

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <Avatar src={user?.photo_url ?? ''} radius="xl" size="lg" alt="Photo not found" />
          <h2 className={classes.name}>{user?.first_name || ''}</h2>
        </div>

        {data?.current_tariff && (
          <Card shadow="sm" padding="md" radius="sm" className={classes.card}>
            <div className={classes.sectionTitle}>
              <FaRegCalendarCheck className="text-xl" />
              <div>Faol tarif ma'lumotlari</div>
            </div>
            <div className={classes.sectionContent}>
              <div>
                <strong>Tarif nomi:</strong> {data?.current_tariff?.selected_tariff.name}
              </div>
              <div>
                <strong>Muddati:</strong>{' '}
                {data?.current_tariff?.tariff_end
                  ? `${dayjs(data.current_tariff.tariff_end).diff(dayjs(), 'day')} kun qoldi`
                  : 'Maʼlumot yoʻq'}
              </div>
              <div>
                <strong>Narxi:</strong>
                {` ${data?.current_tariff?.selected_tariff.price} so‘m`}
              </div>
            </div>
          </Card>
        )}

        <Card shadow="sm" padding="md" radius="md" className={classes.card}>
          <div className={classes.sectionTitle}>
            <LuCarFront className="text-xl" />
            <div>Mashina ma'lumotlari</div>
          </div>
          <div className={classes.sectionContent}>
            <div>
              <strong>Model:</strong> {data?.car_model_name}
            </div>
            <div>
              <strong>Davlat raqami:</strong> {data?.car_number}
            </div>
          </div>
        </Card>

        <div className={classes.actions}>
          <Button variant="gradient" leftSection={<LuPhone />} className={classes.button}>
            Bog‘lanish
          </Button>
          <Button
            variant="gradient"
            leftSection={<FaRegCalendarCheck />}
            className={classes.button}
            onClick={() => navigate('/driver/change-tariff')}
          >
            {data?.current_tariff ? 'Tarifni almashtirish' : 'Tarif sotib olish'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Driver;
