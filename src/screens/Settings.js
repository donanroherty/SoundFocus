import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import UserPropertyList from 'components/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'

const Settings = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home')
  }

  return (
    <View style={styles.wrapper}>
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
    padding: 10,
    backgroundColor: 'white'
  }
})

// export default Settings
export default inject('userPropertyStore')(observer(Settings))
