import React from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { inject, observer } from 'mobx-react'
import Modal from 'react-native-modal'

const SettingModal = props => {
  const {
    settingModalData,
    modalValuePlaceholder,
    settingModalIsOpen,
    closeSettingModal,
    setModalValuePlaceholder
  } = props.settingStore

  const handleCloseDialog = () => {
    closeSettingModal()
  }

  const handleModalValueChanged = val => {
    setModalValuePlaceholder(val)
  }

  const handleSubmit = () => {
    settingModalData.action(modalValuePlaceholder)
    closeSettingModal()
  }

  return (
    <View style={styles.wrapper}>
      <Modal
        isVisible={settingModalIsOpen}
        onBackdropPress={handleCloseDialog}
        onBackButtonPress={handleCloseDialog}
        avoidKeyboard={false}
      >
        <View style={styles.modal}>
          <Text style={styles.headingText}>{settingModalData.name}</Text>
          <TextInput
            keyboardType="numeric"
            placeholder={String(settingModalData.value)}
            maxLength={3}
            selectTextOnFocus={true}
            autoFocus={true}
            value={modalValuePlaceholder}
            onChangeText={handleModalValueChanged}
            clearTextOnFocus={true}
            style={styles.inputField}
          />
          <View style={styles.buttonContainer}>
            <Button title="cancel" onPress={handleCloseDialog} style={styles.button} />
            <Button title="ok" onPress={handleSubmit} style={styles.button} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 24
  },
  inputField: {
    fontSize: 22
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    margin: 5
  }
})

export default inject('settingStore')(observer(SettingModal))
