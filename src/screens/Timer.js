import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  timerReset,
  timerResume,
  timerPause,
  timerToggleActive,
  timerTick,
  timerSetupInterval,
  continuousMode
} from 'actions'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.timer = null
  }

  componentDidMount() {
    this.props.timerSetupInterval()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidUpdate(prevProps, prevState) {
    // Handle timer active state changed
    if (prevProps.timerIsActive !== this.props.timerIsActive) {
      if (this.props.timerIsActive) {
        // start interval loop
        this.timer = setInterval(this.props.timerTick, 1000)
      } else {
        clearInterval(this.timer)

        // Handle timer complete
        if (this.props.remaining <= 0) {
          this.props.timerSetupInterval()
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={this.props.timerReset}>
          <Icon name="md-refresh" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.props.timerToggleActive}>
          <Clock remaining={this.props.remaining} />
        </TouchableOpacity>

        <IntervalCounter
          maxIntervals={this.props.intervalCountPerCycle}
          currentInterval={this.props.intervalsCompleted}
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

const mapStateToProps = state => ({
  remaining: state.timer.remaining,
  timerIsActive: state.timer.timerIsActive,
  timerMode: state.timerMode,
  intervalCountPerCycle: state.intervalCountPerCycle,
  intervalsCompleted: state.intervalsCompleted
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      timerReset: timerReset,
      timerResume: timerResume,
      timerPause: timerPause,
      timerToggleActive: timerToggleActive,
      timerTick: timerTick,
      timerSetupInterval: timerSetupInterval,
      continuousMode: continuousMode
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)
