import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  title: 'My Setting',
  unit: '',
  min: 0,
  max: 0,
  value: 0,
  propertyAction: () => {},
  showModal: false
}

class IntegerModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '' + this.props.value,
      inputIsValid: true
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showModal === false && this.props.showModal === true) {
      this.setState({ value: String(this.props.value) })
    }
  }

  isInputValid = val => {
    const value = parseInt(val)
    return val === '' || (value >= this.props.min && value <= this.props.max)
  }

  handleInput = val => {
    this.setState({
      value: val,
      inputIsValid: this.isInputValid(val)
    })
  }

  handleSubmit = () => {
    if (this.state.inputIsValid) {
      const inputVal = this.state.value === '' ? this.props.value : parseInt(this.state.value)
      this.props.propertyAction(inputVal)
    }
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)

    return (
      <ModalBase
        title={this.props.title}
        showModal={this.props.showModal}
        closeModal={this.props.closeModal}
        propertyAction={this.handleSubmit}
        preventSubmit={this.state.inputIsValid === false}
        keyboardOffset
        requireConfirmation
      >
        <View style={styles.middleRow}>
          <View style={styles.middleRowTopRow}>
            <TextInput
              keyboardType="numeric"
              placeholder={`${this.props.value}`}
              placeholderTextColor={darkMode ? 'lightgrey' : 'darkgrey'}
              maxLength={3}
              value={this.state.value}
              onChangeText={this.handleInput}
              clearTextOnFocus
              selectTextOnFocus
              autoFocus
              style={[styles.inputField, { color: textColor }]}
            />
          </View>

          <View style={styles.middleRowBottomRow}>
            <Text style={{ color: textColor }}>_________________________</Text>
          </View>

          {!this.state.inputIsValid && (
            <Text style={styles.validationText}>
              Enter a valid number between {this.props.min} and {this.props.max}
            </Text>
          )}
        </View>
      </ModalBase>
    )
  }
}

const styles = StyleSheet.create({
  middleRow: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
  },
  middleRowTopRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  middleRowBottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -20
  },
  inputField: {
    fontSize: 22
  },
  validationText: {
    marginTop: 5,
    color: 'red',
    fontSize: 16
  }
})

IntegerModal.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(IntegerModal))
