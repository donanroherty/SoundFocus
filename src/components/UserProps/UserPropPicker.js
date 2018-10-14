import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch, Picker } from 'react-native'
import shortId from 'shortid'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import UserPropBase from 'components/UserProps/UserPropBase'

const defaultProps = {
  propertyAction: () => {}
}

class UserPropBoolean extends Component {
  constructor(props) {
    super(props)
  }

  handleTapProp = () => {}

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <UserPropBase {...this.props} handleTapProp={this.handleTapProp}>
        <View style={styles.value}>
          <Picker
            selectedValue={this.props.value}
            mode="dropdown"
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => this.props.propertyAction(itemValue)}
            itemStyle={{
              fontFamily: Theme.font.medium,
              fontSize: 30,
              color: Theme.colorText
            }}
          >
            {this.props.pickerOptions.map((option, i) => (
              <Picker.Item label={option} value={i} key={shortId.generate()} />
            ))}
          </Picker>
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
  picker: {
    height: 'auto',
    width: 150
  }
})

UserPropBoolean.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropBoolean))
