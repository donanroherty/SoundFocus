import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const Ambiance = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home')
  }

  const { darkMode } = props.userPropertyStore
  const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }
  const { ambianceStore } = props

  return (
    <View style={[styles.wrapper, bgColorStyle]}>
      <ScreenHeader screenName="Ambiance" navigateHome={navigateHome} />

      <AudioTrackList />

      <Text>Active tracks will play when timer starts</Text>

      <TouchableOpacity
        onPress={ambianceStore.toggleMute}
        style={[styles.circle, styles.muteButton]}
      >
        {/* <FeatherIcon name="volume-1" size={35} color={Theme.colorPrimary} /> */}
        {/* <FontAwesome5 name={'volume-up'} size={35} color={Theme.colorPrimary} /> */}
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
  muteButton: {
    marginBottom: 50,
    marginTop: 50,
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

export default inject('userPropertyStore')(inject('ambianceStore')(observer(Ambiance)))
