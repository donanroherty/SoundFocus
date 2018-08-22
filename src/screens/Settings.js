import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingsList from 'components/SettingsList'
import SettingModal from 'components/SettingModal'
import ScreenHeader from 'components/ScreenHeader'
import { inject, observer } from 'mobx-react'

const Settings = props => {
  return (
    <View>
      {props.settingStore.settingModalHasValidData && <SettingModal />}

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
