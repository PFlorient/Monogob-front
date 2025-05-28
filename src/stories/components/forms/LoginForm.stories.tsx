import { StoryFn, Meta } from '@storybook/react';
import LoginForm, { LoginFormProps } from '../../../components/forms/LoginForm';

export default {
  title: 'Components/Forms/LoginForm',
  component: LoginForm,
} as Meta;

const Template: StoryFn<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => console.log(data),
};
