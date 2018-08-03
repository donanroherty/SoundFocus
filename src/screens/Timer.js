import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from '../components/Clock'

export default class Timer extends Component {
  render() {
    return (
      <View>
        <Text> Timer </Text>
        <Clock />
      </View>
    )
  }
}
