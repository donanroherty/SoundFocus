import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserProps/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
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

  showAboutModal = () => {
    this.setState({ aboutModalVisible: true })
    console.log('got here')
  }
  hideAboutModal = () => this.setState({ aboutModalVisible: false })

  render() {
    const navigateHome = () => {
      this.props.navigation.navigate('Home')
    }

    const { darkMode } = this.props.userPropertyStore
    const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    return (
      <View style={[styles.wrapper, bgColor]}>
        <AboutModal
          showModal={this.state.aboutModalVisible}
          closeModal={this.hideAboutModal}
          confirmationAction={this.hideAboutModal}
        />

        <ScreenHeader
          screenName="Settings"
          navigateHome={navigateHome}
          style={styles.userPropertyList}
        />

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
