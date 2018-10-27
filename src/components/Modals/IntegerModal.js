import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import ModalBase from 'components/Modals/ModalBase'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  name: 'My Setting',
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
      value: ''
    }
  }

  handleInput = val => {
    //  TODO: Validate user input
    this.setState({ value: val })
  }

  handleSubmit = () => {
    this.props.propertyAction(this.state.value)
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
        keyboardOffset={true}
      >
        <View style={styles.middleRow}>
          <View style={styles.middleRowTopRow}>
            <TextInput
              keyboardType="numeric"
              placeholder={`${this.props.value}`}
              placeholderTextColor={darkMode ? 'lightgrey' : 'darkgrey'}
              maxLength={3}
              selectTextOnFocus={true}
              autoFocus={true}
              value={this.state.value}
              onChangeText={this.handleInput}
              clearTextOnFocus={true}
              style={[styles.inputField, { color: textColor }]}
            />
          </View>

          <View style={styles.middleRowBottomRow}>
            <Text style={{ color: textColor }}>_________________________</Text>
          </View>
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
  }
})

IntegerModal.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(IntegerModal))
