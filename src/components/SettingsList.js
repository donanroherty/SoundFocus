import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import SettingListItem from 'components/SettingListItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setIntervalLength, setIntervalsPerSession, openSettingModal } from 'actions'

class SettingsList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <SettingListItem
          name="Interval Length"
          shortName="intervalLength"
          type="integer"
          unit="mins"
          min={1}
          max={180}
          value={this.props.intervalSeconds}
          action={this.props.setIntervalLength}
          openSettingModal={this.props.openSettingModal}
        />
        <SettingListItem
          name="Interval Count"
          shortName="intervalCount"
          type="integer"
          min={1}
          max={10}
          value={this.props.intervalCount}
          action={this.props.setIntervalsPerSession}
          openSettingModal={this.props.openSettingModal}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  }
})

const mapStateToProps = state => ({
  intervalSeconds: state.timer.intervalSeconds,
  intervalCount: state.timer.intervalCount
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openSettingModal: openSettingModal,
      setIntervalLength: setIntervalLength,
      setIntervalsPerSession: setIntervalsPerSession
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsList)
