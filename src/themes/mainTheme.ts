import { createTheme } from '@mui/material/styles';
import { blue, orange, grey } from '@mui/material/colors';

export const mainTheme = createTheme({
    palette: {
      primary: {
        light: blue[300],
        main: blue[500],
        dark: blue[800],
        contrastText: grey[50],
      },
      secondary: {
        light: orange[100],
        main: orange[300],
        dark: orange[500],
        contrastText: grey[800],
      },
      grey: {
        100: grey[100],
        300: grey[300],
        500: grey[500],
        700: grey[700],
        900: grey[900],
      },
      common: {
        black: '#000',
        white: '#fff',
      },
    },
  });
