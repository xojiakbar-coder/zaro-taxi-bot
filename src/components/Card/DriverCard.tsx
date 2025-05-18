import React from 'react';
import { type DriverCardProps } from './types';

const DriverCard: React.FC<DriverCardProps> = ({ id, start, finish, onClick }) => {
  return (
    <div onClick={onClick}>
      <div>{id}</div>
      <div>{start}</div>
      <div>{finish}</div>
    </div>
  );
};

export default DriverCard;
