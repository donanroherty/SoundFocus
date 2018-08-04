import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'

class Timer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Clock />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column', alignItems: 'center' },
  clock: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Timer
