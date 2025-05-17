import { useState } from 'react';

import Radio from './Radio';

export default {
  title: 'Design System/Radio',
  component: Radio,
  argTypes: {},
  parameters: {
    actions: { argTypesRegex: '^on.*' }
  }
};

export const ToStorybook = (props: any) => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <Radio {...props} value={props.checked || value} onChange={() => setValue(true)} />
    </div>
  );
};

ToStorybook.storyName = 'Radio';
ToStorybook.story = {
  args: {
    checked: false,
    label: 'Preambula',
    disabled: false
  }
};
