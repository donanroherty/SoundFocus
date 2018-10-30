import Fonts from 'theme/fonts'

export const getBackgroundColor = isDarkMode => {
  return isDarkMode ? theme.colorBackgroundDarkMode : theme.colorBackground
}

export const getTextColor = isDarkMode => {
  return isDarkMode ? theme.colorTextDarkMode : theme.colorText
}

const theme = {
  colorText: '#2196F3',
  colorTextDarkMode: '#FFFFFF',

  colorPrimary: '#2699FB',
  colorPrimaryLight: '#B0D8FB',

  black: '#000000',

  colorBackground: '#FFFFFF',
  colorBackgroundDarkMode: '#000000',

  font: Fonts.roboto,

  getBackgroundColor: getBackgroundColor,
  getTextColor: getTextColor
}

export default theme
