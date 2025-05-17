import React from 'react';
import QRCode from 'react-qr-code';

import classes from '../Table.module.scss';

interface IProps {
  code: string;
  size?: number;
  color?: string;
}

const QrCode: React.FC<IProps> = ({ code, size = 80, color }) => {
  return (
    <div
      className={classes.qr}
      style={
        {
          '--size': `${size}px`
        } as React.CSSProperties
      }
    >
      <QRCode value={code} width={size} height={size} fgColor={color} />
    </div>
  );
};

export default QrCode;
