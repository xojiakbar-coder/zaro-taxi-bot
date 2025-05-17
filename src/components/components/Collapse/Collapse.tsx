import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

interface IProps {
  items: CollapseProps['items'];
  onChange?: (value: any) => void;
  expandIconPosition: CollapseProps['expandIconPosition'];
  bordered?: boolean;
}

const CollapseComponent: React.FC<IProps> = ({
  onChange,
  bordered = false,
  items,
  expandIconPosition = 'end',
  ...props
}) => {
  return (
    <>
      <Collapse {...{ expandIconPosition, onChange, items, bordered }} {...{ props }} />
    </>
  );
};

export default CollapseComponent;
