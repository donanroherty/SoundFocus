import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import { inject, observer } from 'mobx-react'

const Timer = props => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={props.timerStore.reset}>
      <Icon name="md-refresh" size={30} />
    </TouchableOpacity>

    <TouchableOpacity onPress={props.timerStore.toggleActive}>
      <Clock size={100} />
    </TouchableOpacity>

    <IntervalCounter />
  </View>
)

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column', alignItems: 'center' },
  clock: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default inject('timerStore')(observer(Timer))
