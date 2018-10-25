import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserProps/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

import InfoModal from 'components/Modals/InfoModal'

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
    const navigateHome = () => {
      this.props.navigation.navigate('Home')
    }

    const { darkMode } = this.props.userPropertyStore
    const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    const aboutModalContent = <Text>This text will appear in the About modal dialog.</Text>

    return (
      <View style={[styles.wrapper, bgColor]}>
        <InfoModal
          title="About"
          content={aboutModalContent}
          showModal={this.state.aboutModalVisible}
          closeModal={this.hideAboutModal}
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
