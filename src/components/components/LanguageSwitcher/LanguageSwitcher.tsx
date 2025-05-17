import React from 'react';
import { Dropdown, MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

import { IconHOC } from '../Icon';
import EnFlag from '../Icon/list/custom/EnFlag';
import RuFlag from '../Icon/list/custom/RuFlag';
import UzFlag from '../Icon/list/custom/UzFlag';

import classes from './LanguageSwitcher.module.scss';

const languages: any = {
  uz: {
    name: 'O‘z',
    flag: UzFlag
  },
  en: {
    name: 'En',
    flag: EnFlag
  },
  ru: {
    name: 'Ru',
    flag: RuFlag
  }
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(['common']);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <div className={classes.item}>
          <IconHOC name="UzFlag" variant="custom" size={21} />
          <span>O‘zbek</span>
        </div>
      ),
      onClick: () => handleLanguageChange('uz'),
      key: 'uz'
    },
    {
      label: (
        <div className={classes.item}>
          <IconHOC name="RuFlag" variant="custom" size={21} />
          <span>Русский</span>
        </div>
      ),
      onClick: () => handleLanguageChange('ru'),
      key: 'ru'
    },
    {
      label: (
        <div className={classes.item}>
          <IconHOC name="EnFlag" variant="custom" size={21} />
          <span>English</span>
        </div>
      ),
      onClick: () => handleLanguageChange('en'),
      key: 'en'
    }
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <button onClick={e => e.preventDefault()} className={classes.button}>
        {React.createElement(languages[i18n.language].flag)}
        <span>{languages[i18n.language].name}</span>
      </button>
    </Dropdown>
  );
};

export default LanguageSwitcher;
