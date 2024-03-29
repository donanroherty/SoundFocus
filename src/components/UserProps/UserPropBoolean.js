import React, { Component } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
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

  handleTapProp = () => {
    this.props.propertyAction()
  }

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)

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

UserPropBoolean.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(UserPropBoolean))
