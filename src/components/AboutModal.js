import React from 'react'
import { Text } from 'react-native'
import ModalBase from 'components/ModalBase'

const AboutModal = props => {
  return (
    <ModalBase
      title={'About'}
      closeModal={props.closeModal}
      confirmationAction={props.confirmationAction}
    >
      <Text>This is where the about text goes</Text>
    </ModalBase>
  )
}

export default AboutModal
