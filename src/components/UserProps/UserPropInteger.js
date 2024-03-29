import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import UserPropBase from 'components/UserProps/UserPropBase'
import IntegerModal from 'components/Modals/IntegerModal'

const defaultProps = {
  propertyAction: () => {},
  unit: '',
  min: 0,
  max: 0
}

class UserPropInteger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      propertyModalVisible: false
    }
  }

  handleTapProp = () => {
    this.setState({ propertyModalVisible: true })
  }
  closeModal = () => this.setState({ propertyModalVisible: false })

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <UserPropBase {...this.props} handleTapProp={this.handleTapProp}>
        <IntegerModal
          showModal={this.state.propertyModalVisible}
          closeModal={this.closeModal}
          {...this.props}
        />

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
