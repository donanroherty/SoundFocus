import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch, Picker } from 'react-native'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import UserPropBase from 'components/UserProps/UserPropBase'

const defaultProps = {
  type: 'boolean',
  propertyAction: () => {}
}

handleTapProp = () => {
  this.props.showPropertyModal({
    title: this.props.name,
    value: this.props.value,
    propertyAction: this.props.propertyAction
  })
}

class UserPropInteger extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <UserPropBase {...this.props} handleTapProp={this.handleTapProp}>
        <View style={styles.value}>
          <Text style={[styles.text, textColorStyle, styles.linkText, styles.value]}>
            {this.props.value} {this.props.unit}
          </Text>
        </View>
      </UserPropBase>
    )
  }
}

const styles = StyleSheet.create({
  value: {
    // Padding gives space for scroll bar
    paddingRight: 5
  },
  text: {
    fontFamily: Theme.font.regular,
    fontSize: 18
  },
  linkText: { fontFamily: Theme.font.medium },
  picker: {
    height: 'auto',
    width: 150
  }
})

UserPropInteger.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropInteger))
