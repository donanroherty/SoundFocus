import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Modal from 'react-native-modal'
import Theme from 'theme'

const defaultProps = {
  title: 'My Modal',
  showModal: false,
  keyboardOffset: false,
  closeModal: () => {},
  propertyAction: () => {}
}

class ModalBase extends Component {
  constructor(props) {
    super(props)
  }

  submitModal = () => {
    this.props.propertyAction()
    this.props.closeModal()
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const bgColor = Theme.getBackgroundColor(darkMode)

    return (
      <Modal
        isVisible={this.props.showModal}
        onBackdropPress={this.props.closeModal}
        onBackButtonPress={this.props.closeModal}
        avoidKeyboard={false}
        style={[
          styles.wrapper,
          this.props.keyboardOffset && {
            justifyContent: 'flex-start',
            marginTop: '30%'
          }
        ]}
      >
        <View style={[styles.backdrop, { backgroundColor: darkMode ? '#242424' : 'white' }]}>
          {/* Heading */}
          <Text style={[styles.headingText, { color: textColor }]}>{this.props.title}</Text>

          {/* Middle Row */}
          <View style={styles.content}>{this.props.children}</View>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            {this.props.requireConfirmation && (
              <TouchableOpacity onPress={this.props.closeModal} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={this.submitModal} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

ModalBase.defaultProps = defaultProps

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center'
  },
  backdrop: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10
  },
  content: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomRow: {
    flexDirection: 'row'
  },
  headingText: {
    fontSize: 24,
    marginTop: 20
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 30,
    height: 30
  },
  buttonText: {
    fontFamily: Theme.font.regular,
    fontSize: 20,
    color: Theme.colorPrimary
  }
})
export default inject('userPropertyStore')(observer(ModalBase))
