import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Navbar from '../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: StoryFn = () => <Navbar />;

export const Default = Template.bind({});
Default.args = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'About', href: '/about' },
  ],
};
