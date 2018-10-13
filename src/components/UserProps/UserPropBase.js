import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  shortName: 'mySetting',
  name: 'My Setting',
  icon: 'ios-nuclear',
  showIcon: false,
  type: 'integer',
  unit: '',
  min: 0,
  max: 0,
  value: 0,
  pickerOptions: [],
  pickerDefault: '',
  propertyAction: () => console.log('propertyAction not specified'),
  showPropertyModal: () => console.log('showPropertyModal not specified'),
  handleTapProp: () => console.log('handleTapProp not specified')
}

class UserPropBase extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <View>
        <TouchableOpacity onPress={this.props.handleTapProp} style={[styles.wrapper]}>
          {/* Action types show an icon before the label */}
          {this.props.showIcon && (
            <Icon name={this.props.icon} size={30} color={textColor} style={{ paddingRight: 15 }} />
          )}

          <View style={styles.labelAndValue}>
            {/* Property label */}
            <Text style={[styles.text, textColorStyle]}>{this.props.name}</Text>

            {/* Value widget */}
            <View style={styles.value}>{this.props.children}</View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10
  },
  labelAndValue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
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

UserPropBase.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropBase))
