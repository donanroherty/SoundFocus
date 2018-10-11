import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'

import Icon from 'react-native-vector-icons/Ionicons'
import Slider from 'react-native-slider'
import Theme from 'theme'

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

    const { darkMode } = this.props.userPropertyStore
    const textColorStyle = { color: Theme.getTextColor(darkMode) }

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.muteToggleContainer} onPress={toggleActive}>
          <Icon name="ios-musical-note" size={50} color={muted ? 'lightgray' : Theme.colorText} />
        </TouchableOpacity>

        <View style={styles.labelAndVolumeContainer}>
          <Text style={[styles.trackLabel, textColorStyle]}>{this.props.name}</Text>
          <Slider
            value={volume}
            onValueChange={setVolume}
            style={styles.volumeSlider}
            trackStyle={styles.volumeTrackStyle}
            thumbStyle={styles.volumeThumbStyle}
            minimumTrackTintColor="lightgrey"
            maximumTrackTintColor="#EDEDED"
            thumbTintColor={Theme.colorPrimaryLight}
            // debugTouchArea={true}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  muteToggleContainer: {
    marginRight: 15
  },
  labelAndVolumeContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  trackLabel: {
    fontFamily: Theme.font.medium,
    fontSize: 20,
    marginLeft: 15,
    color: Theme.colorText
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
    width: 24,
    height: 24,
    borderRadius: 90
  }
})

AudioTrackControl.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(AudioTrackControl))
