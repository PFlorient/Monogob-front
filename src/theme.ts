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
  typography: {
    fontFamily: 'inherit',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
      variants: [
        {
          props: { variant: 'bordered' },
          style: {
            border: '1px solid #26ba27',
            '&:hover': {
              backgroundColor: '#8cdb8d',
            },
          },
        },
      ],
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
