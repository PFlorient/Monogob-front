import { StoryFn, Meta } from '@storybook/react';
import TableListRoom, { TableListRoomProps } from '../../components/TableListRoom';

export default {
  title: 'Components/TableListRoom',
  component: TableListRoom,
} as Meta;

const Template: StoryFn<TableListRoomProps> = (args) => <TableListRoom {...args} />;

export const Default = Template.bind({});
Default.args = {
  listRooms: [
    {
      uuid: 'uuid1',
      name: 'room1',
      users_uuid: ['user1', 'user2'],
      created_at: new Date().toISOString(),
      admnistrator_uuid: '',
    },
    {
      uuid: 'uuid2',
      name: 'room2',
      users_uuid: ['user3', 'user4'],
      created_at: new Date().toISOString(),
      admnistrator_uuid: '',
    },
  ],
};
