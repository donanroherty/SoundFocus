import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Video from 'react-native-video'

const defaultProps = {
  name: 'Track Name',
  audioAsset: null
}

class AudioTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      duration: 0,
      currentTime: 0
    }

    this.player = null
  }

  handlePlaySound = () => {
    this.setState((prevState, props) => ({ playing: !prevState.playing }))
  }

  onLoadStart = () => {
    console.log('loading')
  }
  onLoad = data => {
    console.log('loaded ', data)
    this.setState({ duration: data.duration })
  }
  onProgress = data => {
    this.setState({ currentTime: data.currentTime })
  }
  onEnd = () => {
    console.log('onEnd ')
  }
  onError = err => {
    console.log('onError ', err)
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>Time: {this.state.currentTime}</Text>
        <Button
          title={this.state.playing ? `Pause ${this.props.name}` : `Play ${this.props.name}`}
          onPress={this.handlePlaySound}
        />

        {this.state.playing && (
          <Video
            source={this.props.audioAsset}
            ref={ref => {
              this.player = ref
            }}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={false}
            resizeMode="cover"
            repeat={true}
            playInBackground={true}
            playWhenInactive={false}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onError={this.onError}
          />
        )}
      </View>
    )
  }
}

AudioTrack.defaultProps = defaultProps

export default AudioTrack
