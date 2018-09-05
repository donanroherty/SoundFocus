import React, { Component } from 'react'
import { View } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'

export default class Ambiance extends Component {
  render() {
    return (
      <View>
        <ScreenHeader screenName="Ambiance" />
        <AudioTrackList />
      </View>
    )
  }
}
