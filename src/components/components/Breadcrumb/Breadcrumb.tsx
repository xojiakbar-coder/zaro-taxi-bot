import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { IconHOC } from '../Icon';

import cls from './Breadcrumb.module.scss';

export interface ICustomBreadcrumbItem {
  key: string | number;
  title: ReactNode;
  href?: string;
}

interface Props {
  routes: ICustomBreadcrumbItem[];
  separator?: ReactNode;
}

const CustomBreadcrumb: FC<Props> = ({ routes, separator = '/' }) => {
  return (
    <nav className={cls.wrapper} aria-label="breadcrumb">
      <ol className={cls.list}>
        {routes.map((item, index) => {
          const isLast = index === routes.length - 1;

          return (
            <li key={item.key || index} className={cls.item}>
              {item.href && !isLast ? (
                <Link to={item.href} className={cls.itemLink}>
                  <span className={cls.itemName}>{item.title}</span>
                </Link>
              ) : (
                <span className={cls.itemName}>{item.title}</span>
              )}

              {!isLast && <IconHOC variant="bulk" name="DirectionRight" className={cls.separator} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default CustomBreadcrumb;
