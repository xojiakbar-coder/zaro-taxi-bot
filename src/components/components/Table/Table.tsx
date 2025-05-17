import React from 'react';
import TableBase, { TableProps } from 'antd/lib/table';
import cx from 'clsx';

import * as Content from './Content';

import './Table.scss';
import classes from './Table.module.scss';

interface IProps extends Omit<TableProps<any>, 'pagination' | 'showSorterTooltip'> {
  children?: any;
  variant?: 'main' | 'secondary';
}

interface IComponent extends React.FC<IProps> {
  Content: typeof Content;
}

const Table: IComponent = ({ className, ...props }) => (
  <div className={cx(classes.wrapper, className)}>
    <TableBase
      scroll={{ x: '1024px' }}
      {...props}
      className={classes.table}
      bordered
      pagination={false}
      showSorterTooltip={false}
    />
  </div>
);

Table.Content = Content;

export default Table;
