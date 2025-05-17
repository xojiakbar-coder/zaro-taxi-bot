import React from 'react';

import classes from './Modal.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Content: React.FC<IProps> = ({ children }) => <div className={classes.contentInner}>{children}</div>;

export default Content;
