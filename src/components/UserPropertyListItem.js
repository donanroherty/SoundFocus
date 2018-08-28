import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import Theme from 'theme'
import UserPropertyModal from 'components/UserPropertyModal'

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

class UserPropertyListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handlePress = () => {
    if (this.props.type === 'boolean') {
      this.props.setPropertyValue()
    } else {
      this.openModal()
    }
  }

  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.state.showModal && (
          <UserPropertyModal
            closeModal={this.closeModal}
            value={this.props.value}
            setPropertyValue={this.props.setPropertyValue}
          />
        )}

        <Text style={[styles.label, styles.text]}>{this.props.name}</Text>
        <View style={styles.divider} />

        {/* Change setting interaction based on setting type */}
        {/* Booleans use a switch */}
        {this.props.type === 'boolean' && (
          <Switch value={this.props.value} onValueChange={this.handlePress} />
        )}

        {/* All other types use a modal to set value */}
        {this.props.type !== 'boolean' && (
          <TouchableOpacity onPress={this.handlePress}>
            <Text style={[styles.text, styles.linkText, styles.value]}>
              {this.props.value} {this.props.unit}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    fontSize: 18,
    color: Theme.textColor
  },
  label: {},
  value: { paddingRight: 5 },

  linkText: { color: Theme.textColor, textDecorationLine: 'underline' },

  divider: {
    flexGrow: 1
  }
})

UserPropertyListItem.defaultProps = defaultProps

export default UserPropertyListItem
