import React from 'react'
import { Text } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'

const InfoModal = props => {
  return <ModalBase {...props}>{props.content}</ModalBase>
}

export default InfoModal
