import React from 'react'
import { Text, StyleSheet } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const ResetTimerModal = props => {
  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)

  return (
    <ModalBase {...props} title="Reset Timer">
      <Text style={[styles.text, { color: textColor }]}>
        This will reset the timer and work intervals
        {'\n'}
        Are you sure?
      </Text>
    </ModalBase>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  }
})

export default inject('userPropertyStore')(observer(ResetTimerModal))
