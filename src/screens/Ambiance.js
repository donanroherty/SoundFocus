import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenHeader from 'components/ScreenHeader'
import AudioTrackList from 'components/AudioTrackList'

import Theme from 'theme'

class Ambiance extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScreenHeader screenName="Ambiance" />
        <AudioTrackList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Theme.backgroundColor
  },
  playbar: {
    alignContent: 'flex-end'
  }
})

export default Ambiance
