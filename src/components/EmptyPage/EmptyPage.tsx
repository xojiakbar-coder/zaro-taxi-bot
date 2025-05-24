import React from 'react';
import { Button } from '../Button';
import { Text } from '@mantine/core';
import { LuInbox } from 'react-icons/lu';
import styles from './EmptyPage.module.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {
  title: string;
  subtitle?: string;
  externalLink?: string;
  internalLink?: string;
  buttonContent?: string;
  buttonOnClick?: () => void;
}

const EmptyPage: React.FC<IProps> = ({
  title,
  subtitle,
  externalLink = '',
  internalLink = '',
  buttonContent = '',
  buttonOnClick
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.emptyPage}>
      <LuInbox className={styles.icon} />
      <Text size="lg" className={styles.title}>
        {title}
      </Text>
      <Text size="sm" className={styles.subtitle}>
        {subtitle}
      </Text>
      {buttonContent && !externalLink && !internalLink && (
        <Button variant="primary" onClick={buttonOnClick} className={styles.button}>
          {buttonContent}
        </Button>
      )}

      {buttonContent && externalLink && !internalLink && (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" onClick={buttonOnClick} className={styles.button}>
            {buttonContent}
          </Button>
        </a>
      )}

      {buttonContent && internalLink && !externalLink && (
        <Button variant="primary" onClick={() => navigate(internalLink)} className={styles.button}>
          {buttonContent}
        </Button>
      )}
    </div>
  );
};

export default EmptyPage;
