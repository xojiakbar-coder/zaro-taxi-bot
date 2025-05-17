import React from 'react';

import { IconHOC } from '../Icon';

import classes from './Input.module.scss';

interface IProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const SearchInput: React.FC<IProps> = ({ placeholder, value, onChange, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick && onClick();
    }
  };

  return (
    <div className={classes.search}>
      <input
        type="text"
        placeholder={placeholder}
        className={classes.searchInput}
        value={value}
        onChange={e => onChange(e)}
        onKeyDown={handleKeyDown}
      />
      <button className={classes.searchButton} onClick={() => onClick && onClick()}>
        <IconHOC name="Search" size={16} />
        <span>Izlash</span>
      </button>
    </div>
  );
};

export default SearchInput;
