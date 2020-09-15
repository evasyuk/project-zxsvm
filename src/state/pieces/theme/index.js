export const TYPES_THEME = {
  SET_THEME: 'SET_THEME',
}

const defaultState = {
  colors: {
    main: '#00FF92',
    secondary: '#009920',
    error: '#D50000',
    red: '#ff0000',
    white: '#ffffff',
    gray100: '#f8f8f8',
    gray200: '#dadada',
    gray300: '#a0a4a8',
    gray400: '#ececec',
    gray500: '#323237',
    black: '#000000',
  },
  palette: {
    primary: {
      main: '#cddc39',
    },
    secondary: {
      main: '#00e5ff',
    },
    error: {
      main: '#f44336',
    },
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    sm: '14px',
    m: '15px',
    md: '16px',
    l: '17px',
    xl: '20px',
    xxl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 500,
    bolder: 700,
  },
  borderRadius: '20px',
  companyLogo: '',
  companyName: '',
}

export const setTheme = ({
  colors = null,
  fontSizes = null,
  companyLogo = null,
  companyName = null,
}) => {
  const update = {}

  if (colors) {
    update.colors = colors
  }
  if (fontSizes) {
    update.fontSizes = fontSizes
  }
  if (companyLogo) {
    update.companyLogo = companyLogo
  }
  if (companyName) {
    update.companyName = companyName
  }

  return {
    type: TYPES_THEME.SET_THEME,
    update,
  }
}

export const reducerTheme = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES_THEME:
      return {
        ...state,
        ...action.update,
      }
    default:
      return state
  }
}
