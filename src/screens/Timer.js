import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'

const defaultProps = {
  intervalTime: 5 /* 1500 = 25mins*/
}
class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      remaining: this.props.intervalTime,
      timerIsActive: false
    }

    this.timer = null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.remaining > 0 && this.state.remaining === 0) {
      this.onTimerComplete()
    }
  }

  toggleTimerActive = () => {
    if (this.state.timerIsActive) {
      this.stopTimer()
    } else {
      this.startTimer()
    }
  }

  startTimer = () => {
    if (this.state.timerIsActive) {
      return
    }

    console.log('startTimer')

    this.setState({
      timerIsActive: true
    })

    this.timer = setInterval(this.tick, 1000)
  }

  stopTimer = () => {
    if (!this.state.timerIsActive) {
      return
    }

    console.log('stopTimer')
    clearInterval(this.timer)
    this.setState({ timerIsActive: false })
  }

  tick = () => {
    this.setState(state => {
      return { remaining: state.remaining - 1 }
    })
  }

  handleResetTimer = () => {
    console.log('timer reset')
    if (this.timer) {
      clearInterval(this.timer)

      this.setState({
        remaining: this.props.intervalTime,
        timerIsActive: false
      })
    }
  }

  onTimerComplete = () => {
    console.log('timerComplete')
    clearInterval(this.timer)
    this.setState({ timerIsActive: false })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.handleResetTimer}>
          <Icon name="md-refresh" size={30} />
        </TouchableOpacity>
        <Clock remaining={this.state.remaining} toggleTimerActive={this.toggleTimerActive} />
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

Timer.defaultProps = defaultProps

export default Timer
