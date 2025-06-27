import styles from '../CreateOrder.module.scss';

import * as Fields from '@/containers/Fields';

import { Spacer } from '@/components/Spacer/Spacer';
import { IoIosCash, IoIosCard } from 'react-icons/io';
import { CheckIcon, Group, Radio, Stack, Text } from '@mantine/core';

import comfortCarIcon from '../../../../assets/images/comfort-car.webp';
import bussinessCarIcon from '../../../../assets/images/bussiness-car.webp';

const Form = () => {
  const carTypesData = [
    { icon: comfortCarIcon, content: 'Standart', value: 'Standart' },
    { icon: comfortCarIcon, content: 'Comfort', value: 'Comfort' },
    { icon: bussinessCarIcon, content: 'Bussiness', value: 'Biznes' }
  ].map(item => (
    <Radio.Card className={styles.root} radius="md" value={item.value} key={item.value}>
      <Group wrap="nowrap" align="center">
        <Radio.Indicator icon={CheckIcon} />
        <div className={styles.radioRontent}>
          <Text className={styles.label}>{item.content}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  const paymentTypeData = [
    { icon: IoIosCash, content: 'Naqd', value: 'Cash' },
    { icon: IoIosCard, content: 'Karta', value: 'Card' }
  ].map(item => {
    // const { icon: Icon } = item;
    return (
      <Radio.Card className={styles.root} radius="md" value={item.value} key={item.value}>
        <Group wrap="nowrap" align="center">
          <Radio.Indicator icon={CheckIcon} />
          {/* <Icon /> */}
          <div className={styles.radioRontent}>
            <Text className={styles.label}>{item.content}</Text>
          </div>
        </Group>
      </Radio.Card>
    );
  });

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
        <Stack gap="md">{carTypesData}</Stack>
      </Fields.RadioGroup>

      <Spacer />

      <Fields.RadioGroup name="paymentType" label="To‘lov turi:">
        <Stack gap="md">{paymentTypeData}</Stack>
      </Fields.RadioGroup>

      <Spacer />

      <div className={styles.rowWrapper}>
        <Fields.Chip name="frontSeat" color="rgb(13, 49, 255)">
          Oldingi o‘rindiqni band qilish
        </Fields.Chip>
        <Fields.Chip name="isCashbackUsed" color="rgb(13, 49, 255)">
          Keshbekni ishlatish
        </Fields.Chip>
      </div>

      <Spacer />
    </>
  );
};

export default Form;
