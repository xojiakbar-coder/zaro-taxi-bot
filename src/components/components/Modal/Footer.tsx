import React from 'react';

import classes from './Modal.module.scss';

interface IProps {
  children: React.ReactNode;
}

const Footer: React.FC<IProps> = ({ children }) => <div className={classes.footer}>{children}</div>;

export default Footer;
