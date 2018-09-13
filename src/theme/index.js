import Fonts from 'theme/fonts'

export const rgba = (r = 0, g = 0, b = 0, a = 0) => {
  return `rgba(${r},${g},${b},${a})`
}

const brandColor = rgba(38, 153, 251, 1)

const theme = {
  colorText: '#4D4D4D',
  colorPrimary: '#2699FB',
  colorPrimaryLight: '#B0D8FB',
  colorPrimaryLighter: '#E2EFFB',
  black: '#000000',
  colorBackground: '#FFFFFF',
  font: Fonts.roboto
}

export default theme
