import React from 'react'
import { Text } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'

const AboutModal = props => {
  return (
    <ModalBase title={'About'} {...props}>
      <Text>This is where the about text goes</Text>
    </ModalBase>
  )
}

export default AboutModal
