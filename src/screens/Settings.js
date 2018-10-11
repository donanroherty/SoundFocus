import React from 'react'
import { View, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const Settings = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home')
  }

  const { darkMode } = props.userPropertyStore
  const bgColor = { backgroundColor: Theme.getBackgroundColor(darkMode) }

  return (
    <View style={[styles.wrapper, bgColor]}>
      <ScreenHeader
        screenName="Settings"
        navigateHome={navigateHome}
        style={styles.userPropertyList}
      />
      <UserPropertyList />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10
  }
})

export default inject('userPropertyStore')(observer(Settings))
