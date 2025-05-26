import React, { useEffect } from 'react';
import classes from './Notification.module.scss';
import { Notification as MantineNotification, type NotificationProps } from '@mantine/core';

interface IProps extends NotificationProps {
  open?: boolean;
  slowHidden?: boolean;
  onClose?: () => void;
  message?: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const Notification: React.FC<IProps> = ({
  open,
  slowHidden = false,
  onClose,
  message,
  position = 'top-right',
  ...props
}) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (open && slowHidden) {
      timeoutId = setTimeout(() => {
        onClose?.();
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [open, slowHidden, onClose]);

  if (!open) return null;

  return (
    <div className={classes.container}>
      <MantineNotification
        className={`${classes.message} ${classes[position]}`}
        onClose={() => {
          onClose?.();
        }}
        {...props}
      >
        {message}
      </MantineNotification>
    </div>
  );
};

export default Notification;
