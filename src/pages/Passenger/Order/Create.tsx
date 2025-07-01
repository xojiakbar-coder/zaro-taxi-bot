import Form from './components/Form';
import { LuCheck } from 'react-icons/lu';
import styles from './CreateOrder.module.scss';
import { notifications } from '@mantine/notifications';

import { Button } from '@/components/Button';
import CreateForm from '@/modules/order/forms/Create';
import Title from '@/components/PageTitle/Title';

const Create = () => {
  return (
    <div className={styles.container}>
      <Title>Buyurtma berish</Title>
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
              <Button type="submit" variant="filled" height={46} disabled={isLoading} className={styles.submit_button}>
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
