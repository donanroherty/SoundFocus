import React from 'react'
import { Text, StyleSheet } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const AboutModal = props => {
  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)

  return (
    <ModalBase {...props} title="About">
      <Text style={[styles.text, { color: textColor }]}>
        Thanks for trying TimeDaddy!
        {'\n'}
        {'\n'}
        This app is a learning project and my first foray into mobile development. If you find it
        useful, a 5 star rating would be highly appreciated. Also feedback is always welcome.
        {'\n'}
        {'\n'}
        Regards,
        {'\n'}
        Ronan.
      </Text>
    </ModalBase>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})

export default inject('userPropertyStore')(observer(AboutModal))
