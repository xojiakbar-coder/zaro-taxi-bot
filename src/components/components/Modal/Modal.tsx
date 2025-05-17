import React from 'react';
import { Modal as ModalBase, ModalProps } from 'antd';
import cx from 'clsx';

import { IconHOC } from '@/components/Icon';

import Content from './Content';
import Footer from './Footer';

import './Modal.scss';
import classes from './Modal.module.scss';

export interface IProps extends Omit<ModalProps, 'footer'> {
  buttons?: React.ReactNode[];
  children: React.ReactNode;
  templatable?: boolean;
  scrollable?: boolean;
  className?: string;
}

interface IComponent extends React.FC<IProps> {
  Content: typeof Content;
  Footer: typeof Footer;
}

const Modal: IComponent = ({
  children,
  destroyOnClose = true,
  maskClosable = true,
  centered = true,
  templatable,
  scrollable,
  buttons,
  className,
  classNames,
  ...props
}) => (
  <ModalBase
    {...props}
    {...{ destroyOnClose, maskClosable, centered }}
    className={cx(
      classes.wrapper,
      className && className,
      classNames && classNames,
      scrollable && classes['wrapper--scrollable'],
      templatable && classes['wrapper--templatable']
    )}
    closeIcon={<IconHOC size={40} name="RemoveThin" />}
    footer={null}
  >
    <div className={classes.content}>{children}</div>
    {!!buttons && (
      <div className={classes.buttons}>
        {buttons.map((btn, index) => (
          <div key={index} className={classes.buttonWrapper}>
            {btn}
          </div>
        ))}
      </div>
    )}
  </ModalBase>
);

Modal.Content = Content;
Modal.Footer = Footer;

export default Modal;
