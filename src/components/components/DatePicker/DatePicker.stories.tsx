import { useState } from 'react';

import DatePicker from '@/components/DatePicker';

export default {
  title: 'Design System/DatePicker',
  component: DatePicker,
  argTypes: {
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    state: {
      options: ['default', 'success', 'warning', 'error'],
      control: { type: 'select' }
    },
    title: {
      control: { type: 'text' }
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = ({ ...props }) => {
  const [startDate, setStartDate] = useState<Date>();

  return (
    <div style={{ width: 500, height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DatePicker {...props} value={startDate} onChange={e => setStartDate(e)} />
    </div>
  );
};

ToStorybook.storyName = 'DatePicker';
ToStorybook.story = {
  args: {
    placeholder: 'Muddatni belgilang',
    disabled: false,
    size: 'sm',
    state: 'error',
    required: true,
    label: 'Hujjat sanasi',
    message: ''
  }
};
