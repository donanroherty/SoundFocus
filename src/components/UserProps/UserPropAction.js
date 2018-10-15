import React, { Component } from 'react'
import UserPropBase from 'components/UserProps/UserPropBase'

const defaultProps = {
  propertyAction: () => {}
}

class UserPropAction extends Component {
  constructor(props) {
    super(props)
  }

  handleTapProp = () => {
    this.props.propertyAction()
  }

  render() {
    return <UserPropBase {...this.props} handleTapProp={this.handleTapProp} />
  }
}

UserPropAction.defaultProps = defaultProps

export default UserPropAction
