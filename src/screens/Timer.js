import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import PlayBar from 'components/PlayBar'
import { inject, observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import Theme from 'theme'

const { width } = Dimensions.get('window')

const Timer = props => (
  <View style={styles.wrapper}>
    <View style={styles.topBlock} />

    <View style={styles.clockContainer}>
      <TouchableOpacity onPress={props.timerStore.toggleActive}>
        <Clock size={100} />
      </TouchableOpacity>

      <IntervalCounter />
    </View>
    <View style={styles.playbarContainer}>
      <PlayBar
        openSettings={() => {
          props.navigation.navigate('Settings')
        }}
        openAmbiance={() => {
          props.navigation.navigate('Ambiance')
        }}
      />
    </View>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Theme.colorBackground
  },
  moreButton: {
    marginTop: 20,
    marginRight: 20,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topBlock: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  clockContainer: {
    flex: 2.8,
    flexDirection: 'column',
    alignItems: 'center'
  },
  playbarContainer: {
    flex: 2,
    alignItems: 'center'
  }
})

export default inject('timerStore')(observer(Timer))
