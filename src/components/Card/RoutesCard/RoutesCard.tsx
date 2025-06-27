import clsx from 'clsx';
import styles from './RoutesCard.module.scss';
import type { RoutesCardProps } from '../types';

const RoutesCard: React.FC<RoutesCardProps> = ({ start, finish, onClick, className = '' }) => {
  return (
    <div onClick={onClick} className={clsx(styles.routesCard, className)}>
      {/* Start Location */}
      <div className={styles.startLocation}>
        <span>Jo‘nash manzili</span>
        <span>{start}</span>
      </div>

      {/* Arrow */}
      <div className={styles.arrow}>→</div>

      {/* Finish Location */}
      <div className={styles.finishLocation}>
        <span>Borish manzili</span>
        <span>{finish}</span>
      </div>
    </div>
  );
};

export default RoutesCard;
