import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingsList from 'components/SettingsList'
import SettingModal from 'components/SettingModal'
import ScreenHeader from 'components/ScreenHeader'

const Settings = props => {
  return (
    <View>
      <SettingModal />
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

export default Settings
