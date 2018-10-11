import React, { Component } from 'react'
import { View } from 'react-native'
import { inject, observer } from 'mobx-react'
import Video from 'react-native-video'

import whiteNoiseAudio from 'audio/white-noise.wav'
import pinkNoiseAudio from 'audio/pink-noise.wav'
import brownNoiseAudio from 'audio/brown-noise.wav'

class AudioPlayerStack extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.playerWhiteNoise = null
    this.playerPinkNoise = null
    this.playerBrownNoise = null
  }

  onError = err => {
    console.log(err)
  }

  render() {
    const { whiteNoise, pinkNoise, brownNoise } = this.props.ambianceStore
    const { ambianceStore } = this.props

    return (
      <View>
        {whiteNoise.muted === false &&
          ambianceStore.globalMute === false && (
            <Video
              source={whiteNoiseAudio}
              ref={ref => {
                this.playerWhiteNoise = ref
              }}
              rate={1.0}
              volume={whiteNoise.volume}
              paused={false}
              repeat={true}
              playInBackground={true}
              playWhenInactive={false}
              onError={this.onError}
            />
          )}

        {pinkNoise.muted === false &&
          ambianceStore.globalMute === false && (
            <Video
              source={pinkNoiseAudio}
              ref={ref => {
                this.playerPinkNoise = ref
              }}
              rate={1.0}
              volume={pinkNoise.volume}
              paused={false}
              repeat={true}
              playInBackground={true}
              playWhenInactive={false}
              onError={this.onError}
            />
          )}

        {brownNoise.muted === false &&
          ambianceStore.globalMute === false && (
            <Video
              source={brownNoiseAudio}
              ref={ref => {
                this.playerBrownNoise = ref
              }}
              rate={1.0}
              volume={brownNoise.volume}
              paused={false}
              repeat={true}
              playInBackground={true}
              playWhenInactive={false}
              onError={this.onError}
            />
          )}
      </View>
    )
  }
}

export default inject('ambianceStore')(observer(AudioPlayerStack))
