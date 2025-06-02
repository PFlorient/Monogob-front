import { Meta, StoryFn } from '@storybook/react';
import RegisterForm, { RegisterFormProps } from '../../../components/forms/RegisterForm';

export default {
  title: 'Components/Forms/RegisterForm',
  component: RegisterForm,
} as Meta;

const Template: StoryFn<RegisterFormProps> = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => console.log(data),
};
