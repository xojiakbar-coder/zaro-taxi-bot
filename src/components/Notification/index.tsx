import React, { useEffect, useState } from 'react';
import { Notification as MantineNotification, type NotificationProps } from '@mantine/core';

interface IProps extends NotificationProps {
  slowHidden?: boolean;
  onClose?: () => void;
}

const Notification: React.FC<IProps> = ({ slowHidden = false, onClose, ...props }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (slowHidden) {
      timeoutId = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [slowHidden, onClose]);

  if (!visible) return null;

  return (
    <MantineNotification
      withCloseButton
      onClose={() => {
        setVisible(false);
        onClose?.();
      }}
      {...props}
    />
  );
};

export default Notification;
