import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SettingsList from 'components/SettingsList'

export default class Settings extends Component {
  render() {
    return (
      <View>
        <SettingsList />
      </View>
    )
  }
}
