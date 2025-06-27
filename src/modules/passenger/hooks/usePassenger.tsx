import { useQuery } from '@tanstack/react-query';
import { useStoredUser } from '@/modules/order/hooks';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const usePassenger = () => {
  const telegram_id = useStoredUser()?.telegram_id;

  const initialData: Types.IQuery.Single = { item: Mappers.Passenger() };

  return useQuery<Types.IQuery.Single, Error>({
    queryKey: ['passenger', telegram_id],

    queryFn: async () => {
      const { data } = await Api.Passenger(telegram_id || '');

      return { item: Mappers.Passenger(data) };
    },
    initialData,
    enabled: !!telegram_id
  });
};

export default usePassenger;
