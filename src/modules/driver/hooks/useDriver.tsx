import { useQuery } from '@tanstack/react-query';
import useStoredUser from '@/modules/order/hooks/useStoredUser';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

const useDriver = () => {
  const telegram_id = useStoredUser()?.telegram_id;

  const initialData = { item: Mappers.Driver() } as Types.IQuery.Single;

  const { data = initialData, ...args } = useQuery<Types.IQuery.Single, string>({
    queryKey: ['driver', 'single', telegram_id],
    queryFn: async () => {
      const { data } = await Api.Driver(telegram_id || '');

      return {
        item: Mappers.Driver(data && data.data)
      };
    },
    initialData,
    enabled: !!telegram_id
  });

  return { ...args, ...data };
};

export default useDriver;
