import React from 'react';

import classes from './PageHeader.module.scss';

interface IProps {
  pageTitle?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  searchInput?: React.ReactNode;
  topActions?: React.ReactNode;
  bottomActions?: React.ReactNode;
}

const PageHeader: React.FC<IProps> = ({ pageTitle, bottomActions, breadcrumbs, searchInput, topActions }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperTop}>
        {pageTitle && !breadcrumbs && <div className={classes.wrapperTopTitle}>{pageTitle}</div>}
        {breadcrumbs && !pageTitle && <div className={classes.wrapperTopBreadcrumbs}>{breadcrumbs}</div>}
        {topActions && <div className={classes.wrapperTopActions}>{topActions}</div>}
      </div>
      <div className={classes.wrapperBottom}>
        <div className={classes.wrapperBottomSearch}>{searchInput}</div>
        {bottomActions && <div className={classes.wrapperBottomActions}>{bottomActions}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
