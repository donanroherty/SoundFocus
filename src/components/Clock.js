import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const defaultProps = {
  seconds: 60,
  size: 80
}

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

  const { darkMode } = props.userPropertyStore
  const textColorStyle = { color: Theme.getTextColor(darkMode) }
  const fontSizeStyle = { fontSize: props.size }

  const { remaining } = props.timerStore
  const time = formatSeconds(remaining)
  const underAMinuteLeft = Math.floor(remaining / 60) <= 0

  const content = underAMinuteLeft ? (
    // Hide minutes and colon if less than 1 minute remains on the clock
    <View style={styles.clockContainer}>
      <Text style={[styles.baseText, styles.seconds, fontSizeStyle]}>{time.seconds}</Text>
    </View>
  ) : (
    <View style={styles.clockContainer}>
      <Text style={[styles.baseText, styles.minutes, textColorStyle, fontSizeStyle]}>
        {time.minutes}
      </Text>
      <Text style={[styles.baseText, styles.colon, textColorStyle, fontSizeStyle]}>:</Text>
      <Text style={[styles.baseText, styles.seconds, textColorStyle, fontSizeStyle]}>
        {time.seconds}
      </Text>
    </View>
  )

  return <View>{content}</View>
}

Clock.defaultProps = defaultProps

const styles = StyleSheet.create({
  clockContainer: {
    flexDirection: 'row'
  },
  baseText: {
    fontFamily: Theme.font.thin
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
  }
})

export default inject('timerStore')(inject('userPropertyStore')(observer(Clock)))
