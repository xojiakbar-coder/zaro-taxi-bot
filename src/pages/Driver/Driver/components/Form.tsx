import { Text } from '@mantine/core';
import styles from '../Driver.module.scss';

import * as Fields from '@/containers/Fields';
import { useList } from '@/modules/tariff/hooks';

import { useDriver } from '@/modules/driver/hooks';
import { Spacer } from '@/components/Spacer/Spacer';
import SpinnerLoader from '@/components/Loader/Spinner';
import CardNumberCopy from '@/components/CopyButton/CardNumberCopy';

const Form = () => {
  const { driver } = useDriver();
  const { items, isLoading, isSuccess } = useList();

  if (isLoading && !isSuccess) return <SpinnerLoader />;

  return (
    <>
      <Text className={styles.form_title}>Tarif {driver.currentTariff != null ? 'almashtirish' : 'sotib olish'}</Text>

      <Spacer size="lg" />

      <CardNumberCopy
        cardNumber="9860 1766 1378 8965"
        description="Tarif to'lovini ushbu kartaga o'tkazishingiz mumkin"
      />

      <Spacer size="lg" />

      <Fields.Select
        name="selectedTariff"
        label="Tarif tanlang"
        className={styles.fields}
        placeholder="Tarif tanlanlash"
        data={items.map(tariff => ({
          value: String(tariff.id),
          label: tariff.name
        }))}
      />

      <Spacer size="md" />

      <Fields.File
        clearable
        className={styles.fields}
        accept="image/png,image/jpeg"
        name="tariffPaymentScreenshot"
        label="To'lov skrinshotini yuklang"
        placeholder="To'lov skrinshotni yuklash"
      />

      <Spacer size="xl" />
    </>
  );
};

export default Form;
