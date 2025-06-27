import classes from '../Driver.module.scss';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Select, Text, Group, FileButton } from '@mantine/core';

import { Button } from '@/components/Button';
import { useDriver } from '@/modules/driver/hooks';
import SpinnerLoader from '@/components/Loader/Spinner';
import { driverTariffSchema } from '@/common/services/formSchema';
import { useTariffsList } from '@/modules/driver/hooks/useTariffList';
import { useTariffFrom, type FormValues } from '@/modules/driver/hooks/useTariffForm';

const Form: React.FC = () => {
  const { item } = useDriver();
  const { data: tariffList, loading: tariffsLoading, success } = useTariffsList();
  const { fetchData: submitTariff, loading, error, success: submitSuccess } = useTariffFrom();
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(driverTariffSchema),
    defaultValues: {
      driver: '',
      selected_tariff: '',
      tariff_payment_screenshot: undefined as any
    }
  });

  useEffect(() => {
    if (item?.id) {
      setValue('driver', `${item.id}`);
    }
  }, [item, setValue]);

  const tariffOptions =
    tariffList?.map(tariff => ({
      label: tariff.name,
      value: String(tariff.id)
    })) || [];

  const onSubmit = (data: FormValues) => {
    submitTariff(data);
  };

  if (tariffsLoading && !success) return <SpinnerLoader />;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrapper}>
        <Text size="lg" fw={600} mb="md">
          Tarif almashtirish
        </Text>

        <Input.Wrapper label="Tarif turi" error={errors.selected_tariff?.message}>
          <Controller
            name="selected_tariff"
            control={control}
            render={({ field }) => (
              <Select placeholder="Tanlang" data={tariffOptions} disabled={!tariffOptions} {...field} />
            )}
          />
        </Input.Wrapper>

        <Input.Wrapper label="To'lov skrinshoti" error={errors.tariff_payment_screenshot?.message}>
          <Group>
            <FileButton
              disabled={!tariffOptions}
              accept="image/png,image/jpeg"
              onChange={file => {
                if (file) {
                  setFileName(file.name);
                  setValue('tariff_payment_screenshot', file, { shouldValidate: true });
                }
              }}
            >
              {props => <Button {...props}>Screenshot yuklash</Button>}
            </FileButton>
          </Group>
          {fileName && <Text size="sm">Tanlangan fayl: {fileName}</Text>}
        </Input.Wrapper>

        {error && (
          <Text c="red" mt="sm">
            {error}
          </Text>
        )}
        {submitSuccess && (
          <Text c="green" mt="sm">
            Yuborildi!
          </Text>
        )}

        <Button type="submit" variant="filled" justify="center" mt="lg" loading={loading} disabled={!item?.id}>
          Yuborish
        </Button>
      </form>
    </div>
  );
};

export default Form;
