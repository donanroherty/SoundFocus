import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingsList from 'components/SettingsList'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'

const Settings = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <ScreenHeader screenName="Settings" />
        <SettingsList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

// export default Settings
export default inject('settingStore')(observer(Settings))
