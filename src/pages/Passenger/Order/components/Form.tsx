import styles from '../CreateOrder.module.scss';

import * as Fields from '@/containers/Fields';

import { Spacer } from '@/components/Spacer/Spacer';
import { PaymentCard } from '@/components/Card/PaymentCard';
import { CarTypeCard } from '@/components/Card/CarTypeCard';

const Form = () => {
  return (
    <>
      <Fields.Text name="extraLuggage" label="Qo‘shimcha yuk" placeholder="Qo‘shimcha yuk haqida yozing" />

      <Spacer />

      <Fields.DateTimePickerInput
        name="dateOfDeparture"
        label="Jo‘nash sanasi belgilang:"
        placeholder="Jo‘nash sana va vaqtini tanlang"
      />

      <Spacer />

      <Fields.TimeInput
        name="timeOfDeparture"
        className={styles.form_input}
        label="Jo‘nash vaqtini belgilang:"
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
