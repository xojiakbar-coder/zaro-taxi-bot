import React from 'react';
import { Link } from 'react-router-dom';

import Edit from '@/components/Icon/list/outline/Edit.tsx';
import Eye from '@/components/Icon/list/outline/Eye.tsx';
import TrashBent from '@/components/Icon/list/outline/TrashBent.tsx';

import classes from '../Table.module.scss';

export interface IItem {
  variant: 'view' | 'edit' | 'delete';
  type?: 'link' | 'button';
  onClick?: () => void;
  to?: string;
  visible?: boolean;
}

interface IProps {
  items: IItem[];
}

const More: React.FC<IProps> = ({ items }) => {
  if (!items.length || !items.filter(item => item.visible !== false).length) return null;
  const icons = {
    view: <Eye />,
    edit: <Edit />,
    delete: <TrashBent />
  };
  return (
    <div className={classes.more}>
      {items
        .filter(item => item.visible !== false)
        .map((item, index) => {
          const key = item.to || item.variant ? `${item.variant}-${item.to || index}` : `item-${index}`;

          const resultProps = {
            onClick: item.onClick ? item.onClick : undefined,
            className: classes.moreItem
          };

          const ItemContent = icons[item.variant];

          if (item.type === 'link' && !!item.to) {
            return (
              <Link key={key} to={item.to} {...resultProps}>
                {ItemContent}
              </Link>
            );
          }

          return (
            <div key={key} {...resultProps}>
              {ItemContent}
            </div>
          );
        })}
    </div>
  );
};

export default More;
