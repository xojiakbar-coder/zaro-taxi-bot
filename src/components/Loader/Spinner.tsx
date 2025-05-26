import React from 'react';
import styles from './Spinner.module.scss';

interface IProps {}

const SpinnerLoader: React.FC<IProps> = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SpinnerLoader;
