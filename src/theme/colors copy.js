import { alpha } from '@mui/material/styles';

const withAlphas = (color) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.30),
    alpha50: alpha(color.main, 0.50)
  };
};

export const neutral = {
  // fondo de header de tablas
  50: '#ff8a50',
  //50: '#F44336',
  //letras pequenitas que no se ven casi
  100: '#FF5722',
//letras pequenitas que no se ven casi
  200: '##FF5722',
  300: '#FFC107',
  //letras de bar lateral
  400: '#FFC107',
  //letras de tablas y graficas.
  500: '#495a86',
  600: '#e0e0e0',

  //letras de header de tablas
  700: '#2e416b',

  //fondo menu bar lat
  800: '#1B3159',
  900: '#1B3159'
};

export const rgp = withAlphas({
  lightest: '#1B3159',
  light: '#1B3159',
  main: '#1B3159',
  dark: '#1B3159',
  darkest: '#1B3159',
  contrastText: '#FFFFFF'
});

export const indigo = withAlphas({
  lightest: '#F5F7FF',
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  darkest: '#312E81',
  contrastText: '#FFFFFF'
});

export const success = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF'
});

export const info = withAlphas({
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF'
});

export const warning = withAlphas({
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF'
});

export const error = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF'
});
