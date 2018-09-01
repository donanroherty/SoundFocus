import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
// import Video from 'react-native-video'

const defaultProps = {
  name: 'Track Name',
  audioAsset: null
}

class AudioTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.sound = null
  }

  handlePlaySound = () => {}

  render() {
    return (
      <View>
        <Text> {this.props.name} </Text>
        <Button title="Play Sound" onPress={this.handlePlaySound} />
      </View>
    )
  }
}

AudioTrack.defaultProps = defaultProps

export default AudioTrack
