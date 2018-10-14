import React, { Component } from 'react'
import { Text, View, StyleSheet, Switch } from 'react-native'
import shortId from 'shortid'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import UserPropBase from 'components/UserProps/UserPropBase'

const defaultProps = {
  type: 'boolean',
  propertyAction: () => {}
}

handleTapProp = () => {
  this.props.propertyAction()
}

class UserPropAction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <UserPropBase {...this.props} handleTapProp={this.handleTapProp}>
        <View style={styles.value}>
          <Switch
            value={this.props.value}
            onValueChange={this.props.propertyAction}
            trackColor={{ true: Theme.colorPrimaryLight }}
            thumbColor="lightgrey"
          />
        </View>
      </UserPropBase>
    )
  }
}

const styles = StyleSheet.create({
  value: {
    // Padding gives space for scroll bar
    paddingRight: 5
  }
})

UserPropAction.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropAction))
