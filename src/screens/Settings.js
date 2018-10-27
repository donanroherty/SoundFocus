import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserProps/UserPropertyList'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'
import AboutModal from 'components/Modals/AboutModal'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutModalVisible: false
    }
  }

  showAboutModal = () => this.setState({ aboutModalVisible: true })
  hideAboutModal = () => this.setState({ aboutModalVisible: false })

  render() {
    const { darkMode } = this.props.userPropertyStore
    const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    return (
      <View style={[styles.wrapper, bgColor]}>
        <AboutModal showModal={this.state.aboutModalVisible} closeModal={this.hideAboutModal} />

        <UserPropertyList showAboutModal={this.showAboutModal} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
})

export default inject('userPropertyStore')(observer(Settings))
