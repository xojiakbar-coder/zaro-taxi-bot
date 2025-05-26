import { Button } from '../components/Button';
import styles from './GenericElement.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const GenericElement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <span>{`${location.pathname.slice(1)} page coming soon...`}</span>
      </div>
      <Button variant="primary" className={styles.button} onClick={() => navigate('/')}>
        Asosiy sahifaga qaytish
      </Button>
    </div>
  );
};

export default GenericElement;
