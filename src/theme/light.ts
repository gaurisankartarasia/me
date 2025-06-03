// Light theme specific options

import { ThemeOptions } from "@mui/material/styles";
import { deepmerge } from '@mui/utils'; 
import { commonThemeOptions } from "./index";

export const lightThemeOptions: ThemeOptions = deepmerge(commonThemeOptions, {
  palette: {
    mode: 'light',
    primary: {
         main: 'rgb(66 94 145)',
         contrastText: 'rgb(255 255 255)',
    },
    secondary: {
      main: 'rgb(86 94 113)', 
    },
    background: {
      default: 'rgb(249 249 255)',
      paper: 'rgb(237 237 244)',
    },
     shape: {
    borderRadius: "50px",
  },
    text: {
        primary: 'rgb(66 94 145)',
        secondary: 'rgba(0, 0, 0, 0.6)',
    },
    action:{
      selected: '#d3e3fd'  
    },
    menu:{
      background: '#efedf0',
    }
  },

});

