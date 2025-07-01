import styles from './CardNumberCopy.module.scss';

import { LuCopy, LuCheck } from 'react-icons/lu';
import { notifications } from '@mantine/notifications';
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';

const CardNumberCopy = ({ cardNumber, description }: { cardNumber: string; description?: string }) => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.card_number}>{cardNumber}</span>

        <CopyButton value={cardNumber} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Nusxalandi!' : 'Nusxalash'} withArrow position="right">
              <ActionIcon
                onClick={() => {
                  copy();
                  notifications.show({
                    icon: <LuCheck />,
                    color: 'teal',
                    title: 'Karta raqami nusxalandi!',
                    message: '',
                    autoClose: 1500
                  });
                }}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'violet', deg: 90 }}
              >
                {copied ? <LuCheck size={18} /> : <LuCopy size={18} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </div>
      <p className={styles.description}>{description}</p>
    </>
  );
};

export default CardNumberCopy;
