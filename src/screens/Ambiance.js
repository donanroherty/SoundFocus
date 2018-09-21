import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'
import Theme from 'theme'

const Ambiance = props => {
  const navigateHome = () => {
    props.navigation.navigate('Home')
  }

  return (
    <View style={styles.wrapper}>
      <ScreenHeader screenName="Ambiance" navigateHome={navigateHome} />
      <AudioTrackList />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  playbar: {
    alignContent: 'flex-end'
  }
})

export default Ambiance
