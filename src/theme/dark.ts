import { ThemeOptions } from "@mui/material/styles";
import { deepmerge } from '@mui/utils'; 
import { commonThemeOptions } from ".";

// Dark theme specific options
export const darkThemeOptions: ThemeOptions = deepmerge(commonThemeOptions, {
    palette: {
      mode: 'dark',
      // Define dark mode palette colors (examples)
      primary: {
        main: 'rgb(171 199 255)', 
        contrastText: 'rgb(12 48 95)', 
      },
      secondary: {
        main: '#f48fb1', // Lighter pink for dark mode
      },
      background: {
        default: 'rgb(17 19 24)', // Common dark background
        paper: 'rgb(30 32 37)',   // Slightly lighter dark paper
      },
      text: {
          primary: 'rgb(171 199 255)',
          secondary: 'rgba(255, 255, 255, 0.7)',
      }
      ,
      action:{
        selected: '#1f3760'
      },
      menu:{
        background: '#1e1e1e',
      }
    },
   
  });
  
