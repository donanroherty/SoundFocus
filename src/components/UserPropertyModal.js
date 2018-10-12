import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ModalBase from 'components/ModalBase'

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
      <ModalBase
        title={this.props.title}
        closeModal={this.props.closeModal}
        confirmationAction={this.handleSubmit}
      >
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
      </ModalBase>
    )
  }
}

const styles = StyleSheet.create({
  middleRow: {
    // flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center'
    // backgroundColor: 'grey'
  },

  middleRowTopRow: { flexDirection: 'row', justifyContent: 'center' },

  middleRowBottomRow: { flexDirection: 'row', justifyContent: 'center', marginTop: -20 },

  inputField: {
    fontSize: 22
  }
})

UserPropertyModal.defaultProps = defaultProps
