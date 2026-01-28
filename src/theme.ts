import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: '#FF6B00',
  secondary: '#ffffff',
  background: {
    main: '#000000',
    paper: '#000000',
    dark: 'rgba(0, 0, 0, 0.85)',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255, 255, 255, 0.8)',
  },
  border: {
    main: '#ffffff',
  },
  shadow: {
    main: '0px 4px 8px rgba(0, 0, 0, 0.4)',
  },
  hover: {
    primary: '#FF8533',
  },
};

export const spacing = {
  header: {
    height: '64px',
  },
  container: {
    padding: {
      top: 4,
      bottom: 4,
    },
  },
};

export const transitions = {
  page: {
    duration: 0.15,
    ease: [0.4, 0, 0.2, 1],
  },
  hover: {
    duration: 0.2,
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background.main,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h5: {
      fontSize: '2.5rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1.3rem',
      lineHeight: 1.8,
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.main,
          boxShadow: colors.shadow.main,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: spacing.container.padding.top,
          paddingBottom: spacing.container.padding.bottom,
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: 'rgba(0,0,0,0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h5: {
      fontSize: '2.5rem',
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1.3rem',
      lineHeight: 1.8,
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          boxShadow: colors.shadow.main,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: spacing.container.padding.top,
          paddingBottom: spacing.container.padding.bottom,
        },
      },
    },
  },
}); 