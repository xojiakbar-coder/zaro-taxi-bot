import React from 'react';
import cx from 'clsx';

import { IconHOC } from '@/components/Icon';

import classes from './FileUploader.module.scss';

export interface IProps {
  title: string;
  message?: string;
  className?: string;
  onSelect: (file: File) => void;
  state?: 'default' | 'success' | 'warning' | 'error';
  variant?: 'dashed' | 'solid';
  block?: boolean;
  accept?: string;
}

const Uploader: React.FC<IProps> = ({
  onSelect,
  title,
  accept,
  message,
  block,
  state = 'default',
  variant = 'dashed'
}) => {
  return (
    <div
      className={cx(
        classes.uplaoder,
        !!state && classes[`uploader--state-${state}`],
        classes[`uploader--variant-${variant}`],
        block && classes.block
      )}
    >
      <label className={classes.label}>
        <div className={classes.icon}>
          <IconHOC name="UploadRectangle" />
        </div>
        <div className={classes.title}>{title}</div>

        <input
          accept={accept}
          className={classes.input}
          type="file"
          multiple={false}
          onChange={({ target: { files } }) => {
            const file = files && files[0];

            if (file) {
              onSelect(file);
            }
          }}
        />
      </label>
      {!!message && <div className={cx(classes.message, classes[`message-${state}`])}>{message}</div>}
    </div>
  );
};

export default Uploader;
