import { StoryFn, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import Navbar, { NavbarProps } from '../../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Connected = Template.bind({});
Connected.args = {
  username: 'John Doe',
};
