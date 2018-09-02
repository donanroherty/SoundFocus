import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AudioTrack from 'components/AudioTrack'

import whiteNoise from 'audio/white-noise.wav'
import pinkNoise from 'audio/pink-noise.wav'
import brownNoise from 'audio/brown-noise.wav'

import { inject, observer } from 'mobx-react'

class AudioTrackList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ambianceStore } = this.props
    return (
      <View style={styles.wrapper}>
        <AudioTrack
          name="White Noise"
          audioAsset={whiteNoise}
          trackStore={ambianceStore.whiteNoise}
        />
        <AudioTrack name="Pink Noise" audioAsset={pinkNoise} trackStore={ambianceStore.pinkNoise} />
        <AudioTrack
          name="Brown Noise"
          audioAsset={brownNoise}
          trackStore={ambianceStore.brownNoise}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'yellow',
    margin: 20,
    padding: 10
  }
})

export default inject('ambianceStore')(observer(AudioTrackList))
