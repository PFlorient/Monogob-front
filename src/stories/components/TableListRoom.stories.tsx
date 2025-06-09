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
      users: [
        { uuid: 'user1', username: 'user1' },
        { uuid: 'user2', username: 'user2' },
      ],
      created_at: new Date().toISOString(),
      administrator_uuid: '',
    },
    {
      uuid: 'uuid2',
      name: 'room2',
      users: [
        { uuid: 'user1', username: 'user1' },
        { uuid: 'user2', username: 'user2' },
      ],
      created_at: new Date().toISOString(),
      administrator_uuid: '',
    },
  ],
};
