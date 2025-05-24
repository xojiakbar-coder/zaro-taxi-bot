import classes from './Driver.module.scss';
import { useEffect, useState } from 'react';
import { Avatar, Card } from '@mantine/core';
import Button from '@/components/Button/Button';
import * as Types from '../../modules/order/types';
import { FaRegCalendarCheck } from 'react-icons/fa';
import useList from '@/modules/driver/hooks/useDriver';
import SpinnerLoader from '@/components/Loader/Spinner';
import { LuCarFront, LuListOrdered, LuPhone } from 'react-icons/lu';

import Form from './components/Form';

const Driver = () => {
  const userStr = localStorage.getItem('telegramUser');
  const user: Types.IEntity.User | null = userStr ? JSON.parse(userStr) : null;

  const [value, setValue] = useState<any | null>(null);

  const { data, loading, fetchData } = useList();

  useEffect(() => {
    if (user) fetchData(user?.id);
  }, [user]);

  if (loading) return <SpinnerLoader />;

  return (
    <div className="flex min-h-max h-max-height overflow-y-auto px-4 py-[38px] flex-col gap-6">
      <div className="flex flex-col gap-6 w-full lg:px-56 md:px-10 px-1">
        <div className="flex items-center gap-4">
          <Avatar src={user?.photo_url ?? ''} radius="xl" size="lg" />
          <h2 className="text-xl font-semibold">{user?.first_name ?? ''}</h2>
        </div>
        <Card shadow="sm" padding="md" radius="sm" className={classes.card}>
          <div className="flex flx-row items-center gap-2 text-lg font-semibold mb-2">
            <FaRegCalendarCheck className="text-xl" />
            <div>Faol tarif ma'lumotlari</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <strong>Tarif nomi:</strong> Standart
            </div>
            <div>
              <strong>Muddati:</strong> 12 kun qoldi
            </div>
            <div>
              <strong>Narxi:</strong> 150 000 so'm
            </div>
          </div>
        </Card>

        <Card shadow="sm" padding="md" radius="md" className={classes.card}>
          <div className="flex flx-row items-center gap-2 text-lg font-semibold mb-2">
            <LuCarFront className="text-xl" />
            <div>Mashina ma'lumotlari</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <strong>Model:</strong> {data?.car_model_name}
            </div>
            <div>
              <strong>Davlat raqami:</strong> {data?.car_number}
            </div>
          </div>
        </Card>

        <Card shadow="sm" padding="md" radius="md" className={classes.card}>
          <div className="flex flx-row items-center gap-2 text-lg font-semibold mb-2">
            <LuListOrdered className="text-xl" />
            <div>Buyurtma ma'lumotlari</div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <strong>Buyurtma ID:</strong> 24815328
            </div>
            <div>
              <strong>Manzil:</strong> Chilonzor ➝ Yunusobod
            </div>
            <div>
              <strong>Holati:</strong> <span>Yo‘lda</span>
            </div>
            <div>
              <strong>Mijoz:</strong> Diyorbek R.
            </div>
          </div>
        </Card>
        <div className="flex justify-start flex-wrap gap-3">
          <Button variant="gradient" leftSection={<LuPhone />} className={classes.button}>
            Bog‘lanish
          </Button>
          <Button
            variant="gradient"
            leftSection={<FaRegCalendarCheck />}
            className={classes.button}
            onClick={() => setValue(data)}
          >
            Tarifni almashtirish
          </Button>
        </div>
      </div>
      <Form open={!!value} onClose={() => setValue(null)} />
    </div>
  );
};

export default Driver;
