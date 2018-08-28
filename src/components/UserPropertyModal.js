import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Modal from 'react-native-modal'

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

  componentDidMount() {
    console.log('modal mounted')
  }

  handleInput = val => {
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
      >
        <View style={styles.modal}>
          <Text style={styles.headingText}>{this.props.name}</Text>

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

          <View style={styles.buttonContainer}>
            <Button title="cancel" onPress={this.props.closeModal} style={styles.button} />
            <Button title="ok" onPress={this.handleSubmit} style={styles.button} />
          </View>
        </View>
      </Modal>
    )
  }
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

UserPropertyModal.defaultProps = defaultProps
