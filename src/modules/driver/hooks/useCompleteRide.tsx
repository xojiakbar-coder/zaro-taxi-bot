import { useStoredUser } from '@/modules/order/hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import * as Api from '../api.ts';
import * as Types from '../types.ts';
import * as Mappers from '../mappers.ts';

const useCompleteRide = () => {
  const telegramId = useStoredUser()?.id || '';
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (): Promise<Types.IEntity.RecentRide> => {
      const { data } = await Api.CompleteRide({ telegramId });
      return Mappers.RecentRide(data && data);
    },
    onSuccess: () => {
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: ['driver', 'single'],
          exact: false
        });
      }, 1000);
    }
  });
};

export default useCompleteRide;
