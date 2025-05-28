import type { Preview } from '@storybook/react';
import '../src/common/styles/index.css';
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme';
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
