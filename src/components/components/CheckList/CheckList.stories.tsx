import Checklist from '@/components/CheckList';

export default {
  title: 'Design System/CheckList',
  component: Checklist,
  argTypes: {
    border: {
      options: ['top', 'bottom'],
      control: 'select'
    },
    value: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = (props: any) => {
  return (
    <div style={{ width: 500 }}>
      <Checklist {...props} />
    </div>
  );
};

ToStorybook.storyName = 'CheckList';
ToStorybook.story = {
  args: {
    label: '1. Noaniq va asossiz havolalar keltirilganligi',
    border: '',
    value: true
  }
};
