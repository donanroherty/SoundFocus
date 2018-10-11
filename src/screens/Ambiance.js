import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const Ambiance = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home')
  }

  const { darkMode } = props.userPropertyStore
  const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }

  return (
    <View style={[styles.wrapper, bgColorStyle]}>
      <ScreenHeader screenName="Ambiance" navigateHome={navigateHome} />
      <AudioTrackList />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  playbar: {
    alignContent: 'flex-end'
  }
})

export default inject('userPropertyStore')(observer(Ambiance))
