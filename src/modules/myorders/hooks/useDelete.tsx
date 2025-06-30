import { useStoredUser } from '@/modules/order/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as Api from '../api.ts';
import * as Types from '../types.ts';
import * as Mappers from '../mappers.ts';

const useDelete = () => {
  const telegramId = useStoredUser()?.telegram_id || '';
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id }: Types.IQuery.Delete): Promise<Types.IEntity.MyOrders> => {
      const { data } = await Api.Delete({ telegramId, bookingId: id });
      return Mappers.PassengerOrders(data && data);
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: ['myOrders', 'single'],
          exact: true
        });
      }, 1000);
    }
  });
};

export default useDelete;
