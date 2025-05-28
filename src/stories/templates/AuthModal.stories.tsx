import { StoryFn, Meta } from '@storybook/react';
import AuthModal, { AuthModalProps } from '../../components/modals/AuthModal';

export default {
  title: 'Components/Modals/AuthModal',
  component: AuthModal,
} as Meta;

const Template: StoryFn<AuthModalProps> = (args) => <AuthModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => console.log('close'),
  loginSubmit: (data) => console.log('login', data),
  registerSubmit: (data) => console.log('register', data),
};
