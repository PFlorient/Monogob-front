import { StoryFn, Meta } from '@storybook/react';
import { Button } from '@mui/material';
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'contained',
  children: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Button',
};

export const Bordered = Template.bind({});
Bordered.args = {
  variant: 'bordered',
  children: 'Button',
};
