import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AudioTrack from 'components/AudioTrack'

// import whiteNoise from 'audio/noise/white-noise.wav'
// import pinkNoise from 'audio/noise/pink-noise.wav'
// import brownNoise from 'audio/noise/brown-noise.wav'

class AudioTrackList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        {/* <AudioTrack name="White Noise" audioAsset="assets/audio/noise/white-noise.wav" /> */}
        {/* <AudioTrack name="Pink Noise" audioAsset="audio/noise/pink-noise.wav" /> */}
        {/* <AudioTrack name="Brown Noise" audioAsset="audio/noise/brown-noise.wav" /> */}
      </View>
    )
  }
}

export default AudioTrackList
