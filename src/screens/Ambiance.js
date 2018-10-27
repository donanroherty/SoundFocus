import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AudioTrackList from 'components/AudioTrackList'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const Ambiance = props => {
  const { darkMode } = props.userPropertyStore
  const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }
  const textColor = Theme.getTextColor(darkMode)
  const { ambianceStore } = props

  return (
    <View style={[styles.wrapper, bgColorStyle]}>
      <AudioTrackList />

      {/* <Text style={[styles.hintText, { color: textColor }]}>
        Ambiance will play when timer starts
      </Text> */}

      <TouchableOpacity
        onPress={ambianceStore.toggleMute}
        style={[styles.circle, styles.muteButton]}
      >
        <Icon
          name={ambianceStore.globalMute ? 'ios-volume-off' : 'ios-volume-high'}
          size={45}
          color={Theme.colorPrimary}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  hintText: {
    alignSelf: 'center',
    justifyContent: 'center'
  },
  muteButton: {
    marginBottom: 80,
    marginTop: 25,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle: {
    borderWidth: 2,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 70,
    height: 70,
    borderColor: Theme.colorPrimary
  }
})

export default inject('userPropertyStore')(inject('ambianceStore')(observer(Ambiance)))
