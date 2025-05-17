import { FC } from 'react';

import { IconHOC } from '../Icon';
import Input from '../Input';

import classes from './Input.module.scss';

interface IProps {
  placeholder: string;
  size: 'sm' | 'md' | 'lg';
}

const Search: FC<IProps> = ({ placeholder, size }) => {
  return (
    <Input
      size={size || 'sm'}
      className={classes.input}
      placeholder={placeholder || 'Izlash'}
      classNameContent={classes.inputContent}
      iconPrefix={<IconHOC name="Search" size={20} />}
    />
  );
};

Search.propTypes = {};

export default Search;
