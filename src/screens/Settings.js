import React from 'react'
import { View, StyleSheet } from 'react-native'
import UserPropertyList from 'components/UserPropertyList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'

const Settings = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <ScreenHeader screenName="Settings" />
        <UserPropertyList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

// export default Settings
export default inject('userPropertyStore')(observer(Settings))
