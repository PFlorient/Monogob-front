import { StoryFn, Meta } from '@storybook/react';
import ListUser, { ListUserProps } from '../../components/Room/ListUser';

export default {
  title: 'Components/ListUser',
  component: ListUser,
} as Meta;

const Template: StoryFn<ListUserProps> = (args) => <ListUser {...args} />;

export const Default = Template.bind({});
Default.args = {
  users: ['user1', 'user2'],
};
