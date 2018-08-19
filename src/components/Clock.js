import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Clock = props => {
  handleTap = () => {
    props.toggleTimerActive()
  }

  const formatSeconds = inSeconds => {
    const mins = Math.floor(inSeconds / 60)
    const secs = inSeconds % 60

    return {
      minutes: mins.toString(),
      seconds: secs >= 10 ? secs.toString() : '0' + secs.toString()
    }
  }

  const remaining = formatSeconds(props.remaining)
  const underAMinuteLeft = Math.floor(props.remaining / 60) <= 0

  const content = underAMinuteLeft ? (
    // Hide minutes and colon if less than 1 minute remains on the clock
    <View style={styles.clockContainer}>
      <Text style={[styles.baseText, styles.seconds]}>{remaining.seconds}</Text>
    </View>
  ) : (
    <View style={styles.clockContainer}>
      <Text style={[styles.baseText, styles.minutes]}>{remaining.minutes}</Text>
      <Text style={[styles.baseText, styles.colon]}>:</Text>
      <Text style={[styles.baseText, styles.seconds]}>{remaining.seconds}</Text>
    </View>
  )

  return <View style={styles.clockContainer}>{content}</View>
}

const styles = StyleSheet.create({
  clockContainer: {
    flexDirection: 'row'
  },
  minutes: {
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  seconds: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  colon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseText: {
    fontSize: 80,
    fontWeight: 'normal'
  }
})

export default Clock
