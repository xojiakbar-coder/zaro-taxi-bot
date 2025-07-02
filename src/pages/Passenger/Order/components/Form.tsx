import styles from '../CreateOrder.module.scss';

import * as Fields from '@/containers/Fields';

import { Spacer } from '@/components/Spacer/Spacer';
import { PaymentCard } from '@/components/Card/PaymentCard';
import { CarTypeCard } from '@/components/Card/CarTypeCard';

const Form = () => {
  return (
    <>
      <Fields.DateTimePickerInput
        withAsterisk
        name="dateOfDeparture"
        label="Jo‘nash sanasi"
        placeholder="Jo‘nash sanasini belgilang"
      />

      <Spacer />

      <Fields.TimeInput
        withAsterisk
        label="Jo‘nash vaqti"
        name="timeOfDeparture"
        placeholder="Jo‘nash vaqtini belgilang"
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

      <Fields.Text name="extraLuggage" label="Qo‘shimcha yuk" placeholder="Qo‘shimcha yuk haqida yozing" />

      <Spacer />

      <div className={styles.row_wrapper}>
        <Fields.Chip name="isCashbackUsed" color="teal">
          Keshbekni ishlatish
        </Fields.Chip>
        <Fields.Chip name="frontSeat" color="teal">
          Oldingi o‘rindiqni band qilish
        </Fields.Chip>
      </div>

      <Spacer />
    </>
  );
};

export default Form;
