import React from 'react';

import classes from './FileUploader.module.scss';

export interface IProps {
  children: React.ReactNode;
}

const List: React.FC<IProps> = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default List;
