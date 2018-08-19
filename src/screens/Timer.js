import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Timer extends Component {
  render() {
    const { timer, settings } = this.props.store

    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={timer.reset}>
          <Icon name="md-refresh" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={timer.toggleActive}>
          <Clock remaining={timer.remaining} />
        </TouchableOpacity>

        <IntervalCounter
          maxIntervals={settings.intervalCount}
          currentInterval={timer.intervalsCompleted}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column', alignItems: 'center' },
  clock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Timer
