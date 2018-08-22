import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'

// import AmbianceMixer from 'screens/AmbianceMixer'
// import AmbiancePresets from 'screens/AmbiancePresets'

export default class Ambiance extends Component {
  render() {
    return (
      <View>
        <ScreenHeader screenName="Ambiance" />
      </View>
    )
  }
}
