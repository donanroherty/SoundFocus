import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'

const InfoModal = props => {
  return (
    <ModalBase {...props}>
      <Text style={styles.text}>{props.content}</Text>
    </ModalBase>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

export default InfoModal
