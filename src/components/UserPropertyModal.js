import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const defaultProps = {
  shortName: 'mySetting',
  name: 'My Setting',
  type: 'integer',
  unit: '',
  min: 0,
  max: 0,
  value: 0,
  setPropertyValue: () => {}
}

export default class UserPropertyModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {}

  handleInput = val => {
    //  TODO: Validate user input
    this.setState({ value: val })
  }

  handleSubmit = () => {
    this.props.setPropertyValue(this.state.value)
    this.props.closeModal()
  }

  render() {
    return (
      <Modal
        isVisible={true}
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
              <Text style={styles.headingText}>{this.props.name}</Text>
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
          <View style={styles.middleRow}>
            <View style={styles.middleRowTopRow}>
              <TextInput
                keyboardType="numeric"
                placeholder={`${this.props.value}`}
                maxLength={3}
                selectTextOnFocus={true}
                autoFocus={true}
                value={this.state.value}
                onChangeText={this.handleInput}
                clearTextOnFocus={true}
                style={styles.inputField}
              />
            </View>

            <View style={styles.middleRowBottomRow}>
              <Text>_________________________</Text>
            </View>
          </View>

          {/* Bottom Row */}
          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={this.handleSubmit} style={styles.okButtonContainer}>
              <Text style={styles.okButton}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

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
  middleRow: {
    // flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
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

  middleRowTopRow: { flexDirection: 'row', justifyContent: 'center' },
  middleRowBottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: -20 },

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

UserPropertyModal.defaultProps = defaultProps
