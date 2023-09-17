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
        light: orange[300],
        main: orange[500],
        dark: orange[800],
        contrastText: grey[800],
      },
    },
  });
