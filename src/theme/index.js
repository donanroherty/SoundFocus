import Fonts from 'theme/fonts'

export const rgba = (r = 0, g = 0, b = 0, a = 0) => {
  return `rgba(${r},${g},${b},${a})`
}

const brandColor = rgba(38, 153, 251, 1)

export const getBackgroundColor = isDarkMode => {
  return isDarkMode ? theme.colorBackgroundDarkMode : theme.colorBackground
}

export const getTextColor = isDarkMode => {
  return isDarkMode ? theme.colorTextDarkMode : theme.colorText
}

const theme = {
  colorText: '#4D4D4D',
  colorPrimary: '#2699FB',
  colorPrimaryLight: '#B0D8FB',
  colorPrimaryLighter: '#E2EFFB',

  black: '#000000',
  colorBackground: '#FFFFFF',

  colorTextDarkMode: '#FFFFFF',
  colorBackgroundDarkMode: '#000000',

  font: Fonts.roboto,

  getBackgroundColor: getBackgroundColor,
  getTextColor: getTextColor
}

export default theme
