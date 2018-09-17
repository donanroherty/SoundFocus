import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AudioTrackControl from 'components/AudioTrackControl'

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
        <AudioTrackControl
          name="White Noise"
          audioAsset={whiteNoise}
          trackStore={ambianceStore.whiteNoise}
          globalMute={ambianceStore.globalMute}
        />
        <AudioTrackControl
          name="Pink Noise"
          audioAsset={pinkNoise}
          trackStore={ambianceStore.pinkNoise}
          globalMute={ambianceStore.globalMute}
        />
        <AudioTrackControl
          name="Brown Noise"
          audioAsset={brownNoise}
          trackStore={ambianceStore.brownNoise}
          globalMute={ambianceStore.globalMute}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 20
  }
})

export default inject('ambianceStore')(observer(AudioTrackList))
