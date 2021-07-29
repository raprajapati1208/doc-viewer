import { createMuiTheme } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme } from '@material-ui/core';

const createTheme =
  process.env.NODE_ENV === 'production'
    ? createMuiTheme
    : unstable_createMuiStrictModeTheme;

export const theme = createTheme({
  palette: {
    primary: {
      main: '#237bff',
      light: '#4f95ff',
      dark: '#154999',
      border: 'rgba(35, 123, 255, 0.5)',
      background: 'rgba(35, 123, 255, 0.08)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#36b37e',
      light: '#5ec297',
      dark: '#206B4B',
      border: 'rgba(54, 179, 126, 0.5)',
      background: 'rgba(54, 179, 126, 0.08)',
    },
    text: {
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  shape: {},
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 72,
      },
    },
  },

  custom: {
    boxshadow: {
      boxShadow: '0px 0px 0px 1px #E0E0E0',
    },
  },
});

theme.overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      borderRadius: 20,
      '&:hover': {},
      '&:focus': {},
      '&:active': {},
    },
    containedPrimary: {
      '&:disabled': {
        pointerEvents: 'auto',
      },
      '&:hover': {},
    },
    outlined: {
      border: '1px solid #E0E0E0',
      '&:hover': {
        backgroundColor: '#FAFAFA',
      },
    },
  },
  MuiIconButton: {
    root: {
      '&:hover': {},
    },
    colorSecondary: {
      '&:hover': {
        backgroundColor: 'rgba(35, 123, 255, 0.04)',
      },
    },
  },
  MuiRadio: {
    root: {},
    colorSecondary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'rgba(35, 123, 255, 0.04)',
        },
      },
    },
  },
  MuiCheckbox: {
    root: {
      '&$checked': {},
    },
    colorSecondary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: 'rgba(35, 123, 255, 0.04)',
        },
      },
    },
  },
  MuiTextField: {
    root: {},
  },
  MuiSelect: {
    select: {
      '&$select': {
        backgroundColor: 'transparent',
      },
    },
  },
  MuiInputLabel: {
    root: {},
    outlined: {
      '&:hover': {},
    },
  },
  MuiFilledInput: {
    root: {},
  },
  MuiTableRow: {
    root: {
      '&$selected, &$selected:hover': {
        backgroundColor: '#fafafa',
      },
    },
  },
  MuiAppBar: {
    root: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 72,
      },
    },
  },
  MuiToolbar: {
    root: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 72,
      },
    },
    regular: {
      minHeight: 64,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 56,
      },
      '@media (min-width:768px)': {
        minHeight: 72,
      },
    },
  },
  MuiTab: {
    root: {
      '&$selected': {
        color: theme.palette.primary.main,
      },
    },
  },
  MuiTooltip: {
    popper: {
      '& *': {
        fontSize: 14,
      },
    },
    tooltip: {
      backgroundColor: '#616161',
      opacity: 1,
      fontSize: 14,
    },
  },
  MuiSnackbar: {
    anchorOriginBottomLeft: {
      zIndex: 9999,
      bottom: '64px !important',
      left: '64px !important',
      justifyContent: 'flex-start',
      [theme.breakpoints.up('sm')]: {
        bottom: '64px !important',
        left: '64px !important',
        justifyContent: 'flex-start',
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        bottom: '8px !important',
        left: '8px !important',
        right: '8px',
      },
    },
  },
  MuiSnackbarContent: {
    root: {
      minWidth: '0px !important',
      maxWidth: '600px !important',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'fit-content !important',
      },
    },
    message: {
      flex: '1',
    },
    action: {},
  },
  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
    button: {
      '&:hover': {},
    },
  },
  MuiBackdrop: {
    root: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  },
  MuiTablePagination: {
    actions: {
      color: theme.palette.primary.main,
    },
  },
  MuiDialogTitle: {
    root: {
      '& > * ': {
        fontWeight: 'bold',
      },
      fontWeight: 'bold',
    },
  },
};

theme.props = {
  MuiButton: {
    disableTouchRipple: true,
  },
  MuiIconButton: {
    disableTouchRipple: true,
  },
  MuiButtonBase: {
    disableTouchRipple: true,
  },
  MuiCheckbox: {
    disableRipple: true,
  },
  MuiTextField: {
    InputLabelProps: {
      shrink: true,
    },
  },
  MuiRadio: {
    disableTouchRipple: true,
  },
  MuiCard: {
    elevation: 12,
  },
  MuiPaper: {
    elevation: 12,
  },
  MuiTooltip: {
    background: '#616161',
    opacity: 1,
  },
};
