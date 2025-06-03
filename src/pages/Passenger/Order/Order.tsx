import FormBody from './components/Form';
import classes from './Order.module.scss';
import { LuCheck, LuX } from 'react-icons/lu';

import { Button } from '@/components/Button';
import { Notification } from '@mantine/core';
import { useCreatePassengerOrder } from '@/modules/order/hooks/useOrder';
import { useDefaultFormData } from '@/modules/order/hooks/useDefaultFormData';

const OrderPage = () => {
  const defaultFormData = useDefaultFormData();
  const { formData, setFormData, loading, error, success, handleSubmit } = useCreatePassengerOrder(defaultFormData);

  return (
    <div className={classes.container}>
      <div className={classes.title}>Buyurtma berish</div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <FormBody formData={formData} setFormData={setFormData} />
        {error && (
          <Notification
            color="red"
            icon={<LuX />}
            variant="error"
            className={classes.alert}
            title={`Xatolik yuz berdi, qayta urinib ko‘ring`}
          />
        )}
        {success && !error && (
          <Notification
            color="teal"
            icon={<LuCheck />}
            variant="succcess"
            withCloseButton={false}
            title="Buyurtma muvaffaqiyatli yuborildi!"
          />
        )}

        <Button type="submit" variant="filled" height={50} disabled={loading} className={classes.submitButton}>
          {loading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
        </Button>
      </form>
    </div>
  );
};

export default OrderPage;
