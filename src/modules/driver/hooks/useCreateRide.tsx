import { useMutation } from '@tanstack/react-query';
import { notifications } from '@mantine/notifications';

import { LuCalendarX, LuCheck } from 'react-icons/lu';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

type IProps = {
  driverId: string;
  routeId: number;
};

const useCreateRide = () => {
  return useMutation<Types.IQuery.Single, string, IProps>({
    mutationFn: async ({ routeId, driverId }) => {
      if (!driverId) throw new Error('Driver ID is missing');

      const { data } = await Api.CreateRide({ driverId, routeId });

      return {
        driver: Mappers.Driver(data?.data)
      };
    },

    onSuccess: () => {
      notifications.show({
        icon: <LuCheck />,
        color: 'teal',
        position: 'top-center',
        title: 'Navbat muvaffaqiyatli qo‘shildi',
        autoClose: 2000,
        message: ''
      });
    },

    onError: (error: any) => {
      notifications.show({
        icon: <LuCalendarX />,
        color: 'orange',
        position: 'top-center',
        title: JSON.stringify(error?.request.response).search('no_tariff')
          ? "Sizda aktiv tarif yo'q"
          : 'Xatolik yuz berdi',
        message: '',
        autoClose: 3000
      });
    }
  });
};

export default useCreateRide;
