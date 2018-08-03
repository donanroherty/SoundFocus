import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const defaultProps = {
  intervalTime: 1500 /* 1500 = 25mins*/
}

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      remaining: this.props.intervalTime
    }

    this.startTime = 0
    this.endTime = 0
    this.paused = true
    this.timer = null
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.remaining == 0) {
      this.onTimerComplete()
    }
  }

  resume = () => {
    console.log('resumeClock')
    this.startTime = new Date().getTime() * 0.001 // Get time in seconds
    this.endTime = this.startTime + this.props.intervalTime
    this.setState({ remaining: this.endTime - this.startTime })

    this.paused = false

    this.timer = setInterval(this.tick, 1000)
  }

  pause = () => {
    console.log('pauseClock')
    clearInterval(this.timer)
    this.paused = true
  }

  tick = () => {
    this.setState(state => ({ remaining: state.remaining - 1 }))
  }

  onTimerComplete = () => {
    console.log('timerComplete')
    clearInterval(this.timer)
    this.paused = true
  }

  handleTimerPress = () => {
    if (this.paused) {
      this.resume()
    } else {
      this.pause()
    }
  }

  formatSeconds = inSeconds => {
    const mins = Math.floor(inSeconds / 60)
    const secs = inSeconds % 60

    return {
      minutes: mins.toString(),
      seconds: secs >= 10 ? secs.toString() : '0' + secs.toString()
    }
  }

  render() {
    const remaining = this.formatSeconds(this.state.remaining)

    const underAMinuteLeft = Math.floor(this.state.remaining / 60) <= 0

    return (
      <TouchableOpacity style={styles.clockContainer} onPress={this.handleTimerPress}>
        {underAMinuteLeft ? (
          <View />
        ) : (
          <View style={styles.minutesContainer}>
            <Text style={styles.baseText}>{remaining.minutes}</Text>
          </View>
        )}

        <View />

        {underAMinuteLeft ? (
          <View />
        ) : (
          <View style={styles.colonContainer}>
            <Text style={styles.baseText}>:</Text>
          </View>
        )}

        <View
          style={
            underAMinuteLeft
              ? [styles.secondsContainer, { justifyContent: 'center', alignItems: 'center' }]
              : styles.secondsContainer
          }
        >
          <Text style={styles.baseText}>{remaining.seconds}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  clockContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  minutesContainer: {
    // width: 150,
    // height: 150,
    // backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  secondsContainer: {
    // width: 150,
    // height: 150,
    // backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  colonContainer: {
    // width: 30,
    // height: 150,
    // backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseText: {
    fontSize: 75,
    fontWeight: 'normal'
  }
})

Clock.defaultProps = defaultProps

export default Clock
