import { memo } from 'react';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

type NotificationListProps = {
  className?: string;
};

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props;
  const { isLoading, data } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack gap={'16'} className={className}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Skeleton
              key={index}
              border={'8px'}
              height={'80px'}
              width={'100%'}
            />
          ))}
      </VStack>
    );
  }

  return (
    <VStack gap={'16'} className={className}>
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
