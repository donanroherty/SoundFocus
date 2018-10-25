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
          <TouchableOpacity style={styles.muteToggleContainer} onPress={toggleActive}>
            <Svg height="70" width="275" style={styles.svg}>
              <G>
                {/* <Rect width="275" height="70" /> */}
                <G id="noise-wave" transform="translate(-29 -216)">
                  {muted ? (
                    <Path
                      id="noise-wave-low"
                      stroke={this.props.trackColor}
                      strokeWidth={3}
                      d="M29.1,250.6h75.3c2.7-0.5,5.5-0.6,8.3-0.5c3.6,0.3,3,1.8,5.9,1.9s1.2-3.1,4.8-3.1
				s2.6,4.4,5.7,4.5s2.1-5.5,5.6-5.5s6.8,6.8,11,6.8s2.1-8.4,6.4-8.4c4.5,0,7.8,10.3,10.3,10.3c4.3,0,2.5-11.9,5.9-11.9s6,10,9.9,10
				s2.1-8.4,5.6-8.4s6.8,7,12.2,7.1s4.8-5.5,7.1-5.5s2.1,4,6.2,4.1s8-2.6,11.3-2.7s3.3,2,7.4,2s4.8-0.7,4.8-0.7h71.4"
                    />
                  ) : (
                    <Path
                      id="noise-wave-2"
                      stroke={this.props.trackColor}
                      strokeWidth={3}
                      d="M29.1,250.8h75.3c0,0,4.8-5,8.3-2.9s3,10.7,5.9,11s1.2-17.9,4.8-17.9s2.6,26.1,5.7,26.3
				s2.1-32.5,5.6-32.5s6.8,39.7,11,40.1s2.1-49.3,6.4-49.3c4.5-0.1,7.8,60.3,10.3,60.3c4.3-0.1,2.5-70.1,5.9-70s6,59,9.9,59
				s2.1-49.5,5.6-49.3s6.8,41.4,12.2,41.6s4.8-32.3,7.1-32.5s2.1,23.6,6.2,24.1s8-15.4,11.3-15.7s3.3,11.6,7.4,11.6
				c2.4,0,4.4-1.7,4.8-4h71.4"
                    />
                  )}
                </G>
              </G>
            </Svg>
          </TouchableOpacity>

          {!muted && (
            <Slider
              value={volume}
              onValueChange={setVolume}
              style={styles.volumeSlider}
              trackStyle={styles.volumeTrackStyle}
              thumbStyle={styles.volumeThumbStyle}
              minimumTrackTintColor={this.props.trackColor}
              maximumTrackTintColor="#EDEDED"
              thumbTintColor={Theme.colorPrimaryLight}
              // debugTouchArea={true}
            />
          )}
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
    // borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center'
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
    width: 275,
    alignSelf: 'center',
    marginBottom: 10
  },
  volumeTrackStyle: {
    height: 3,
    margin: 3,
    borderRadius: 90
  },
  volumeThumbStyle: {
    width: 30,
    height: 30,
    borderRadius: 90,
    borderColor: 'black',
    borderWidth: 1.5
  }
})

AudioTrackControl.defaultProps = defaultProps

export default inject('userPropertyStore')(observer(AudioTrackControl))
