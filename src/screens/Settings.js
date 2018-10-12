import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

import AboutModal from 'components/AboutModal'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutModalVisible: false
    }
  }

  showAboutModal = () => {
    this.setState({ aboutModalVisible: true })
  }

  hideAboutModal = () => {
    this.setState({ aboutModalVisible: false })
  }

  render() {
    const navigateHome = () => {
      this.props.navigation.navigate('Home')
    }

    const { darkMode } = this.props.userPropertyStore
    const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    return (
      <View style={[styles.wrapper, bgColor]}>
        {this.state.aboutModalVisible && (
          <AboutModal closeModal={this.hideAboutModal} confirmationAction={this.hideAboutModal}>
            <Text>This is where the about text goes</Text>
          </AboutModal>
        )}

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

// const Settings = props => {
//   const navigateHome = () => {
//     props.navigation.navigate('Home')
//   }

//   const { darkMode } = props.userPropertyStore
//   const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

//   return (
//     <View style={[styles.wrapper, bgColor]}>
//       <ScreenHeader
//         screenName="Settings"
//         navigateHome={navigateHome}
//         style={styles.userPropertyList}
//       />
//       <UserPropertyList />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
})

export default inject('userPropertyStore')(observer(Settings))
