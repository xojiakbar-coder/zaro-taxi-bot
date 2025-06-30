import { useQuery } from '@tanstack/react-query';
import { useStoredUser } from '@/modules/order/hooks';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

interface IProps {
  enabled?: boolean;
}

const useList = ({ enabled = true }: IProps = {}) => {
  const telegram_id = useStoredUser()?.id;

  const initialData = { items: [] } as Types.IQuery.List;

  const { data = initialData, ...args } = useQuery<Types.IQuery.List, string>({
    queryKey: ['myOrders', 'list'],
    queryFn: async () => {
      const { data } = await Api.PassengerOrders(telegram_id || '');

      return {
        items: Array.isArray(data) ? data.reverse().map(Mappers.PassengerOrders) : []
      };
    },
    initialData,
    enabled
  });

  return { ...args, ...data };
};

export default useList;
