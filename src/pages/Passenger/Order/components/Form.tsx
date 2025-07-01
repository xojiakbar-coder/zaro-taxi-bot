import styles from '../CreateOrder.module.scss';

import * as Fields from '@/containers/Fields';

import { Spacer } from '@/components/Spacer/Spacer';
import { PaymentCard } from '@/components/Card/PaymentCard';
import { CarTypeCard } from '@/components/Card/CarTypeCard';

const Form = () => {
  return (
    <>
      <Fields.DateTimePickerInput name="dateOfDeparture" label="Jo‘nash sanasi:" placeholder="Jo‘nash sana belgilang" />

      <Spacer />

      <Fields.TimeInput name="timeOfDeparture" label="Jo‘nash vaqti:" placeholder="Jo‘nash vaqtini belgilang" />

      <Spacer />

      <Fields.RadioGroup name="carType" label="Mashina turi:">
        <CarTypeCard />
      </Fields.RadioGroup>

      <Spacer />

      <Fields.RadioGroup name="paymentType" label="To‘lov turi:">
        <PaymentCard />
      </Fields.RadioGroup>

      <Spacer />

      <Fields.Text name="extraLuggage" label="Qo‘shimcha yuk" placeholder="Qo‘shimcha yuk haqida yozing" />

      <Spacer />

      <div className={styles.row_wrapper}>
        <Fields.Chip name="isCashbackUsed" color="rgb(13, 49, 255)">
          Keshbekni ishlatish
        </Fields.Chip>
        <Fields.Chip name="frontSeat" color="rgb(13, 49, 255)">
          Oldingi o‘rindiqni band qilish
        </Fields.Chip>
      </div>

      <Spacer />
    </>
  );
};

export default Form;
