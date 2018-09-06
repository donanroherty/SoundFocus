import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { observer } from 'mobx-react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/Ionicons'
import Slider from 'react-native-slider'
import theme from '../theme'

const defaultProps = {
  name: 'Track Name',
  audioAsset: null,
  trackStore: null,
  globalMute: false
}

class AudioTrackControl extends Component {
  constructor(props) {
    super(props)
    this.player = null
  }

  render() {
    const { volume, muted, setVolume, toggleActive } = this.props.trackStore

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.muteToggleContainer} onPress={toggleActive}>
          <Icon name="ios-musical-note" size={50} color={muted ? 'lightgray' : theme.colorText} />
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

AudioTrackControl.defaultProps = defaultProps

export default observer(AudioTrackControl)
