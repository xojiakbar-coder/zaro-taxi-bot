import Form from './components/Form';
import { LuCheck } from 'react-icons/lu';
import styles from './CreateOrder.module.scss';
import { notifications } from '@mantine/notifications';

import { Button } from '@/components/Button';
import CreateForm from '@/modules/order/forms/Create';

const Create = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Buyurtma berish</div>
      <CreateForm
        onSuccess={() => {
          notifications.show({
            color: 'teal',
            loading: false,
            autoClose: 2000,
            icon: <LuCheck />,
            position: 'top-center',
            title: 'Buyurtma muvaffaqiyatli yaratildi!',
            message: null
          });
        }}
      >
        {({ isLoading }) => {
          return (
            <>
              <Form />
              <Button type="submit" variant="filled" height={46} disabled={isLoading} className={styles.submitButton}>
                {isLoading ? 'Yuborilmoqda...' : 'Buyurtma berish'}
              </Button>
            </>
          );
        }}
      </CreateForm>
    </div>
  );
};

export default Create;
