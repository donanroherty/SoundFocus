import React from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import { inject, observer } from 'mobx-react'
import Modal from 'react-native-modal'

const SettingModal = props => {
  const {
    modalSettingID,
    getSettingDefinition,
    getUserPropertyValue,
    settingModalHasValidData,
    modalValue,
    settingModalIsOpen,
    closeSettingModal,
    setModalValue,
    submitModal
  } = props.settingStore

  return (
    <View style={styles.wrapper}>
      {// Sanity check setting definition before rendering
      props.settingStore.settingModalHasValidData && (
        <Modal
          isVisible={settingModalIsOpen}
          onBackdropPress={closeSettingModal}
          onBackButtonPress={closeSettingModal}
          avoidKeyboard={false}
        >
          <View style={styles.modal}>
            <Text style={styles.headingText}>{getSettingDefinition(modalSettingID).name}</Text>

            <TextInput
              keyboardType="numeric"
              placeholder={String(getUserPropertyValue(modalSettingID))}
              maxLength={3}
              selectTextOnFocus={true}
              autoFocus={true}
              value={modalValue}
              onChangeText={setModalValue}
              clearTextOnFocus={true}
              style={styles.inputField}
            />

            <View style={styles.buttonContainer}>
              <Button title="cancel" onPress={closeSettingModal} style={styles.button} />
              <Button title="ok" onPress={submitModal} style={styles.button} />
            </View>
          </View>
        </Modal>
      )}
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
