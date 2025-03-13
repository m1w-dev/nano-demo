import { Theme, Components } from '@mui/material'


export default {
  styleOverrides: {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      minWidth: 320,
    },
    a: {
      textDecoration: 'none',
    },
  },
} as Components<Theme>['MuiCssBaseline']
