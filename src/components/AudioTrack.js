import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from 'react-native-slider'
import Theme from 'theme'
import theme from '../theme'

const defaultProps = {
  name: 'Track Name',
  audioAsset: null
}

class AudioTrack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: 0,
      currentTime: 0
    }

    this.player = null
  }

  handlePlaySound = () => {
    this.props.trackStore.toggleActive()
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
    const { volume, isActive, setVolume, toggleActive } = this.props.trackStore

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.muteToggleContainer} onPress={toggleActive}>
          <Icon
            name="ios-musical-note"
            size={50}
            color={isActive ? theme.colorText : 'lightgray'}
          />
        </TouchableOpacity>

        <View style={styles.labelAndVolumeContainer}>
          <Text style={styles.trackLabel}>{this.props.name}</Text>
          <Slider
            value={volume}
            onValueChange={setVolume}
            style={styles.volumeSlider}
            trackStyle={styles.volumeTrackStyle}
            thumbStyle={styles.volumeThumbStyle}
            minimumTrackTintColor="lightgrey"
            maximumTrackTintColor="#EDEDED"
            thumbTintColor={theme.colorPrimaryLight}
            // debugTouchArea={true}
          />
        </View>

        {isActive && (
          <Video
            source={this.props.audioAsset}
            ref={ref => {
              this.player = ref
            }}
            rate={1.0}
            volume={volume}
            paused={false}
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

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    margin: 10
  },
  muteToggleContainer: {
    // backgroundColor: 'cyan',
    marginRight: 15
  },
  labelAndVolumeContainer: {
    flex: 1,
    flexDirection: 'column'
    // backgroundColor: 'green'
  },
  trackLabel: {
    fontSize: 20,
    marginLeft: 15,
    color: theme.colorText
  },
  volumeSlider: {
    // backgroundColor: 'grey',
    flex: 1,
    marginBottom: 0
  },
  volumeTrackStyle: {
    height: 8,
    borderRadius: 90
  },
  volumeThumbStyle: {
    width: 30,
    height: 30,
    borderRadius: 90
  }
})

AudioTrack.defaultProps = defaultProps

export default observer(AudioTrack)
