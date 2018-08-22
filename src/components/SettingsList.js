import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingListItem from 'components/SettingListItem'
import { inject, observer } from 'mobx-react'
import shortId from 'shortid'

const SettingsList = props => {
  // Create a list from settingDefinitions in the setting store
  const content = Object.keys(props.settingStore.settingDefinitions).map(val => {
    return <SettingListItem key={shortId.generate()} settingID={val} />
  })

  return <View style={styles.wrapper}>{content}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  }
})

export default inject('settingStore')(observer(SettingsList))
