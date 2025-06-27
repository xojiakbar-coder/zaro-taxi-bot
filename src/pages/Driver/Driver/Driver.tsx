import classes from './Driver.module.scss';
import { Avatar, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

import { FaRegCalendarCheck } from 'react-icons/fa';
import { LuBadgeInfo, LuCarFront, LuPhone } from 'react-icons/lu';

import dayjs from 'dayjs';
import EmptyPage from '@/components/EmptyPage';
import SpinnerLoader from '@/components/Loader/Spinner';
import useDriver from '@/modules/driver/hooks/useDriver';
import { useUser } from '@/modules/order/hooks';

const Driver = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { item, isLoading } = useDriver();

  if (isLoading) return <SpinnerLoader />;

  if ((!isLoading && !item) || (!item.carModelName && !item.carNumber)) {
    return (
      <EmptyPage
        icon={LuBadgeInfo}
        title={`Ma'lumotlar topilmadi`}
        buttonContent="Biz bilan bog'lanish"
        externalLink="https://t.me/murodov_azizmurod"
        subtitle="Bu holat uchun biz bilan bog'lanishingiz mumkin."
      />
    );
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <div className={classes.header}>
          <Avatar src={user?.photo_url} radius="xl" size="lg" alt="Photo not found" />
          <h2 className={classes.name}>{user?.first_name}</h2>
        </div>

        {item.currentTariff?.isPaid && (
          <Card shadow="sm" padding="md" radius="sm" className={classes.card}>
            <div className={classes.sectionTitle}>
              <FaRegCalendarCheck className="text-xl" />
              <div>Faol tarif ma'lumotlari</div>
            </div>
            <div className={classes.sectionContent}>
              <div>
                <strong>Tarif nomi:</strong> {item?.currentTariff?.selectedTariff.name}
              </div>
              <div>
                <strong>Muddati:</strong>{' '}
                {item?.currentTariff?.tariffEnd
                  ? `${dayjs(item.currentTariff.tariffEnd).diff(dayjs(), 'day')} kun qoldi`
                  : 'Maʼlumot yoʻq'}
              </div>
              <div>
                <strong>Narxi:</strong>
                {` ${item?.currentTariff?.selectedTariff.price} so‘m`}
              </div>
            </div>
          </Card>
        )}

        {item.carModelName && item.carNumber && (
          <Card shadow="sm" padding="md" radius="md" className={classes.card}>
            <div className={classes.sectionTitle}>
              <LuCarFront className="text-xl" />
              <div>Mashina ma'lumotlari</div>
            </div>
            <div className={classes.sectionContent}>
              <div>
                <strong>Model:</strong> {item?.carModelName}
              </div>
              <div>
                <strong>Davlat raqami:</strong> {item?.carNumber}
              </div>
            </div>
          </Card>
        )}

        {item.currentTariff.selectedTariff.id && (
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
              {item?.currentTariff ? 'Tarifni almashtirish' : 'Tarif sotib olish'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Driver;
