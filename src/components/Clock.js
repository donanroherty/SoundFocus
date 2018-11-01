import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import * as Animatable from 'react-native-animatable'
import Theme from 'theme'

const defaultProps = {
  seconds: 60,
  size: 80
}

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    handleTap = () => {
      this.props.toggleTimerActive()
    }

    const formatSeconds = inSeconds => {
      const mins = Math.floor(inSeconds / 60)
      const secs = inSeconds % 60

      return {
        minutes: mins.toString(),
        seconds: secs >= 10 ? secs.toString() : '0' + secs.toString()
      }
    }

    const { darkMode } = this.props.userPropertyStore
    const textColorStyle = { color: Theme.getTextColor(darkMode) }
    const fontSizeStyle = { fontSize: this.props.size }

    const { remaining, timerIsActive } = this.props.timerStore
    const time = formatSeconds(remaining)
    const underAMinuteLeft = Math.floor(remaining / 60) <= 0

    const flashAnim = {
      0: {
        opacity: 1
      },
      1: {
        opacity: 0.2
      }
    }

    const content = underAMinuteLeft ? (
      // Hide minutes and colon if less than 1 minute remains on the clock
      <View style={styles.clockContainer}>
        <Text style={[styles.baseText, styles.seconds, textColorStyle, fontSizeStyle]}>
          {time.seconds}
        </Text>
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

    return (
      <View>
        {timerIsActive ? (
          <View>{content}</View>
        ) : (
          <Animatable.View
            animation={flashAnim}
            iterationCount="infinite"
            direction="alternate"
            duration={4000}
            easing="ease-in-out"
          >
            {content}
          </Animatable.View>
        )}
      </View>
    )
  }
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
