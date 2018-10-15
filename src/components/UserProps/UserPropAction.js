import React, { Component } from 'react'
import { View, StyleSheet, Switch } from 'react-native'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import UserPropBase from 'components/UserProps/UserPropBase'

const defaultProps = {
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
    return <UserPropBase {...this.props} handleTapProp={this.handleTapProp} />
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
