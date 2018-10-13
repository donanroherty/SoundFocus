import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

import AboutModal from 'components/Modals/AboutModal'
import UserPropertyModal from 'components/Modals/UserPropertyModal'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutModalVisible: false,
      propertyModalVisible: false,
      propertyModalData: {}
    }
  }

  showAboutModal = () => {
    this.setState({ aboutModalVisible: true })
    console.log('got here')
  }
  hideAboutModal = () => this.setState({ aboutModalVisible: false })

  showPropertyModal = modalProps => {
    this.setState({ propertyModalData: { ...modalProps }, propertyModalVisible: true })
  }
  hidePropertyModal = () => this.setState({ propertyModalVisible: false })

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

        <UserPropertyModal
          showModal={this.state.propertyModalVisible}
          closeModal={this.hidePropertyModal}
          {...this.state.propertyModalData}
        />

        <ScreenHeader
          screenName="Settings"
          navigateHome={navigateHome}
          style={styles.userPropertyList}
        />
        <UserPropertyList
          showAboutModal={this.showAboutModal}
          showPropertyModal={this.showPropertyModal}
        />
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
