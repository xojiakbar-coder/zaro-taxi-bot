import styles from '../CreateOrder.module.scss';

import * as Fields from '@/containers/Fields';

import { Spacer } from '@/components/Spacer/Spacer';
import { PaymentCard } from '@/components/Card/PaymentCard';
import { CarTypeCard } from '@/components/Card/CarTypeCard';

const Form = () => {
  return (
    <>
      <Fields.Text
        name="extraLuggage"
        label="Qo‘shimcha yuk"
        className={styles.formInput}
        placeholder="Qo‘shimcha yuk haqida yozing"
      />

      <Spacer />

      <Fields.DateTimePicker
        name="dateOfDeparture"
        className={styles.formInput}
        label="Jo‘nash sanasi va vaqtini:"
        placeholder="Jo‘nash sana va vaqtini tanlang"
      />

      <Spacer />

      <Fields.RadioGroup name="carType" label="Mashina turi:">
        <CarTypeCard />
      </Fields.RadioGroup>

      <Spacer />

      <Fields.RadioGroup name="paymentType" label="To‘lov turi:">
        <PaymentCard />
      </Fields.RadioGroup>

      <Spacer />

      <div className={styles.rowWrapper}>
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
