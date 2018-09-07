import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'
import PlayBar from 'components/PlayBar'

class Ambiance extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScreenHeader screenName="Ambiance" />
        <AudioTrackList />
        <PlayBar style={styles.playbar} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // flexDirection: 'column'
  },
  playbar: {
    // alignContent: 'flex-end'
  }
})

export default Ambiance
