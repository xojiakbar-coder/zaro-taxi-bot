import { useState } from 'react';

import Spacer from '@/components/Spacer';

import Item from './Item';
import List from './List';
import Uploader from './Uploader';

export default {
  title: 'Design System/FileUploader',
  component: List,
  argTypes: {
    children: {
      control: 'text'
    }
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = (props: any) => {
  const [file, setFile] = useState<File | string>('');

  console.log('file', file);
  const items = [
    {
      title: 'Qadam turini tanlash',
      key: '1'
    },
    {
      title: 'Tashkilotni tanlash',
      key: '2'
    },
    {
      title: 'Kelishish va imzolash',
      key: '3'
    }
  ];

  return (
    <div style={{ width: 500 }}>
      <List>
        {items.map(item => (
          <Item key={item.key} {...props} title={item.title} />
        ))}
      </List>
      <Spacer size={20} />
      <Uploader
        title="File biriktirish"
        onSelect={value => setFile(value)}
        message="This field is required"
        variant="solid"
        block
      />
    </div>
  );
};

ToStorybook.storyName = 'FileUploader';
ToStorybook.story = {
  args: {
    title: 'Tashkilotni tanlash',
    children: 'Box component'
  }
};
