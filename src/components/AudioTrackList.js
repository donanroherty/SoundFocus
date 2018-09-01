import React, { Component } from 'react'
import { View } from 'react-native'
import AudioTrack from 'components/AudioTrack'

import whiteNoise from 'audio/white-noise.wav'
import pinkNoise from 'audio/pink-noise.wav'
import brownNoise from 'audio/brown-noise.wav'

class AudioTrackList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <AudioTrack name="White Noise" audioAsset={whiteNoise} />
        <AudioTrack name="Pink Noise" audioAsset={pinkNoise} />
        <AudioTrack name="Brown Noise" audioAsset={brownNoise} />
      </View>
    )
  }
}

export default AudioTrackList
