import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AudioTrackControl from 'components/AudioTrackControl'
import Icon from 'react-native-vector-icons/Ionicons'
import whiteNoise from 'audio/white-noise.wav'
import pinkNoise from 'audio/pink-noise.wav'
import brownNoise from 'audio/brown-noise.wav'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

class AudioTrackList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { ambianceStore } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.trackList}>
          <AudioTrackControl
            name="White Noise"
            audioAsset={whiteNoise}
            trackStore={ambianceStore.whiteNoise}
            globalMute={ambianceStore.globalMute}
            lastTrack={false}
          />
          <AudioTrackControl
            name="Pink Noise"
            audioAsset={pinkNoise}
            trackStore={ambianceStore.pinkNoise}
            globalMute={ambianceStore.globalMute}
            lastTrack={false}
          />
          <AudioTrackControl
            name="Brown Noise"
            audioAsset={brownNoise}
            trackStore={ambianceStore.brownNoise}
            globalMute={ambianceStore.globalMute}
            lastTrack={true}
          />
        </View>
        <TouchableOpacity
          onPress={ambianceStore.toggleMute}
          style={[styles.circle, styles.muteButton]}
        >
          <Icon
            name={ambianceStore.globalMute ? 'md-volume-off' : 'md-volume-high'}
            size={45}
            color={Theme.colorPrimary}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    // borderColor: 'white',
    // borderWidth: 1,
    flex: 1
  },
  trackList: {
    flex: 1
  },
  muteButton: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle: {
    borderWidth: 1,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 70,
    height: 70,
    borderColor: Theme.colorPrimary
  }
})

export default inject('ambianceStore')(observer(AudioTrackList))
