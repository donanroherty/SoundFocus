import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'

import Icon from 'react-native-vector-icons/Ionicons'
import Slider from 'react-native-slider'
import Theme from 'theme'

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask
} from 'react-native-svg'

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
    const textColor = Theme.getTextColor(darkMode)
    const textColorStyle = { color: textColor }

    return (
      <View style={[styles.wrapper, this.props.lastTrack && { marginBottom: 0 }]}>
        {/* <TouchableOpacity style={styles.muteToggleContainer} onPress={toggleActive}>
          <Icon name="ios-musical-note" size={50} color={muted ? 'lightgray' : Theme.colorText} />
        </TouchableOpacity> */}

        <View style={[styles.card, { borderColor: textColor }]}>
          {/* <Text style={[styles.trackLabel, textColorStyle]}>{this.props.name}</Text> */}

          <Svg height="71.221" width="271.973" style={styles.svg}>
            <G transform="translate(-29.125 -213.997)">
              <Path
                stroke={this.props.trackColor}
                strokeWidth={3}
                d="M29.1,249.5h74.5c0,0,4.7-4.8,8.2-2.8s2.9,10.3,5.9,10.6s1.2-17.2,4.7-17.2s2.6,25.1,5.6,25.3
		s2.1-31.2,5.5-31.2s6.7,38.1,10.9,38.5s2.1-47.3,6.3-47.3c4.5-0.1,7.7,57.9,10.2,57.9c4.2-0.1,2.4-67.3,5.9-67.2s5.9,56.6,9.8,56.6
		s2.1-47.5,5.5-47.3s6.7,39.8,12,40s4.8-31,7-31.2s2.1,22.7,6.2,23.1s7.9-14.8,11.2-15.1s3.2,11.2,7.3,11.2c2.3,0.1,4.3-1.6,4.7-3.8
		h70.7"
              />
            </G>
          </Svg>

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
    flex: 1 / 3,
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 15
  },
  svg: {
    flex: 1,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1
    // borderColor: 'red'
  },
  trackLabel: {
    fontFamily: Theme.font.medium,
    fontSize: 20,
    // marginLeft: 15,
    color: Theme.colorText
  },
  volumeSlider: {
    flex: 1,
    marginBottom: 10
  },
  volumeTrackStyle: {
    height: 30,
    margin: 30,
    borderRadius: 90
  },
  volumeThumbStyle: {
    width: 40,
    height: 40,
    borderRadius: 90,
    borderColor: 'black',
    borderWidth: 1.5
  }
})

AudioTrackControl.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(AudioTrackControl))
