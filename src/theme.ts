import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#26ba27',
    },
    secondary: {
      main: '#d9c50e',
    },
  },
  shape: {
    borderRadius: 50,
  },
};

const theme = createTheme(themeOptions);

export default theme;
