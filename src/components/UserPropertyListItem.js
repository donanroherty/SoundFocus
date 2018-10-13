import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch, Picker } from 'react-native'
import shortId from 'shortid'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  shortName: 'mySetting',
  name: 'My Setting',
  actionIcon: 'ios-nuclear',
  type: 'integer',
  unit: '',
  min: 0,
  max: 0,
  value: 0,
  pickerOptions: [],
  pickerDefault: '',
  propertyAction: () => {},
  showPropertyModal: () => {}
}

class UserPropertyListItem extends Component {
  constructor(props) {
    super(props)
  }

  handleTapProp = () => {
    switch (this.props.type) {
      case 'integer':
        this.props.showPropertyModal({
          title: this.props.name,
          value: this.props.value,
          propertyAction: this.props.propertyAction
        })
        break
      case 'action':
        this.props.propertyAction()
        break
      case 'boolean':
        this.props.propertyAction()
        break
      default:
        break
    }
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <View>
        <TouchableOpacity
          onPress={this.handleTapProp}
          style={[
            styles.wrapper,
            { justifyContent: this.props.type === 'action' ? 'flex-start' : 'space-between' }
          ]}
        >
          {/* Action types show an icon before the label */}
          {this.props.type === 'action' && (
            <Icon
              name={this.props.actionIcon}
              size={30}
              color={textColor}
              style={{ paddingRight: 15 }}
            />
          )}

          {/* Property label */}
          <Text style={[styles.text, textColorStyle]}>{this.props.name}</Text>
          {/* <View style={styles.divider} /> */}

          {/* Change setting interaction based on setting type */}
          {/* Booleans use a switch */}
          {this.props.type === 'boolean' && (
            <Switch
              value={this.props.value}
              onValueChange={this.props.propertyAction}
              trackColor={{ true: Theme.colorPrimaryLight }}
              thumbColor="lightgrey"
            />
          )}

          {/* Integer types show a touchable value that opens a modal */}
          {this.props.type === 'integer' && (
            <Text style={[styles.text, textColorStyle, styles.linkText, styles.value]}>
              {this.props.value} {this.props.unit}
            </Text>
          )}

          {/* Picker option type */}
          {this.props.type === 'picker' && (
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
          )}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  text: {
    fontFamily: Theme.font.regular,
    fontSize: 18
  },

  value: { paddingRight: 5 },
  linkText: { fontFamily: Theme.font.medium },
  picker: {
    height: 'auto',
    width: 150
  },
  divider: {
    flexGrow: 1
  }
})

UserPropertyListItem.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropertyListItem))
