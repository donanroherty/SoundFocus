import React from 'react'
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeSettingModal } from 'actions'

const SettingModal = props => {
  const handleCloseDialog = () => {
    props.closeSettingModal()
  }

  return (
    <View>
      {/* <Modal
        style={styles.wrapper}
        visible={props.settingModalIsOpen}
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
      </Modal> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white'
  }
})

const mapStateToProps = state => ({
  settingModalIsOpen: state.settings.settingModalIsOpen,
  settingModalData: state.timer.settingModalData
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      closeSettingModal: closeSettingModal
    },
    dispatch
  )
export default SettingModal

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SettingModal)
