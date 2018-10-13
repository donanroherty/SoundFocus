import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const defaultProps = {
  title: 'My Modal',
  showModal: false,
  closeModal: () => {},
  action: () => {}
}

export default class ModalBase extends Component {
  constructor(props) {
    super(props)
  }

  submitModal = () => {
    this.props.action()
    this.props.closeModal()
  }

  render() {
    return (
      <Modal
        isVisible={this.props.showModal}
        onBackdropPress={this.props.closeModal}
        onBackButtonPress={this.props.closeModal}
        avoidKeyboard={false}
        style={styles.wrapper}
      >
        <View style={styles.settingBox}>
          {/* Top Row */}
          <View style={styles.topRow}>
            <View style={styles.topRowLeftCol} />

            <View style={styles.topRowMidCol}>
              <Text style={styles.headingText}>{this.props.title}</Text>
            </View>

            <TouchableOpacity onPress={this.props.closeModal} style={styles.topRowRightCol}>
              <Icon
                name="ios-close"
                size={45}
                color={Theme.colorPrimary}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Middle Row */}
          <View style={styles.content}>{this.props.children}</View>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={this.submitModal} style={styles.okButtonContainer}>
              <Text style={styles.okButton}>OK</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '30%'
  },
  settingBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '85%',
    borderRadius: 10,
    height: 190
  },

  topRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
    // backgroundColor: 'cyan'
  },
  content: {
    flexGrow: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
    // backgroundColor: 'grey'
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
    // backgroundColor: 'cyan'
  },

  topRowLeftCol: {
    width: 40,
    height: 40
  },
  topRowMidCol: { flex: 1, flexDirection: 'row', justifyContent: 'center' },

  // close button container
  topRowRightCol: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 40,
    height: 40
    // backgroundColor: 'red'
  },

  headingText: {
    fontSize: 24,
    marginTop: 10
  },
  closeIcon: {
    marginTop: 3
  },

  inputField: {
    fontSize: 22
  },

  okButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 50,
    alignItems: 'center'
  },

  okButton: {
    fontFamily: Theme.font.regular,
    fontSize: 20,
    color: Theme.colorPrimary
  }
})
