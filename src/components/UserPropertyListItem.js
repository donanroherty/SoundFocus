import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch, Picker } from 'react-native'
import shortId from 'shortid'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  shortName: 'mySetting',
  name: 'My Setting',
  icon: 'ios-nuclear',
  showIcon: false,

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
            styles.wrapper
            // { justifyContent: this.props.type === 'action' ? 'flex-start' : 'space-between' }
          ]}
        >
          {/* Action types show an icon before the label */}
          {this.props.showIcon && (
            <Icon name={this.props.icon} size={30} color={textColor} style={{ paddingRight: 15 }} />
          )}

          <View style={styles.labelAndValue}>
            {/* Property label */}
            <Text style={[styles.text, textColorStyle]}>{this.props.name}</Text>

            <View style={styles.value}>
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
            </View>

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

UserPropertyListItem.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropertyListItem))
