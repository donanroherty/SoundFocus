import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SettingsList from 'components/SettingsList'
import SettingModal from 'components/SettingModal'

export default class Settings extends Component {
  render() {
    return (
      <View>
        <SettingModal />
        <SettingsList />
      </View>
    )
  }
}
