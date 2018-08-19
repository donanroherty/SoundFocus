import React from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'

const SettingModal = props => {
  const { settings } = props.store

  const handleCloseDialog = () => {
    settings.closeSettingModal()
  }

  return (
    <View>
      <Modal
        style={styles.wrapper}
        visible={settings.settingModalIsOpen}
        transparent={true}
        onRequestClose={() => {
          alert('Modal has been closed')
        }}
      >
        <View style={{ marginTop: 22 }}>
          <Text>Hello</Text>
          <TouchableOpacity onPress={handleCloseDialog}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white'
  }
})

export default inject('store')(observer(SettingModal))
