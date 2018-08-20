import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingListItem from 'components/SettingListItem'
import { inject, observer } from 'mobx-react'
import shortId from 'shortid'

const SettingsList = props => {
  const settingDefinitions = {
    workDuration: {
      name: 'Work Duration',
      type: 'integer',
      unit: 'mins',
      min: 1,
      max: 180,
      value: props.settingStore.workDuration,
      action: props.settingStore.setWorkDuration
    },
    shortBreakDuration: {
      name: 'Short Break Duration',
      type: 'integer',
      unit: 'mins',
      min: 1,
      max: 180,
      value: props.settingStore.shortBreakDuration,
      action: props.settingStore.setShortBreakDuration
    },
    longBreakDuration: {
      name: 'Long Break Duration',
      type: 'integer',
      unit: 'mins',
      min: 1,
      max: 180,
      value: props.settingStore.longBreakDuration,
      action: props.settingStore.setLongBreakDuration
    },
    workIntervalCount: {
      name: 'Work Interval Count',
      type: 'integer',
      unit: '',
      min: 1,
      max: 60,
      value: props.settingStore.workIntervalCount,
      action: props.settingStore.setWorkIntervalCount
    },
    continuousMode: {
      name: 'Continous Mode',
      type: 'boolean',
      unit: '',
      min: 0,
      max: 0,
      value: props.settingStore.continuousMode,
      action: props.settingStore.toggleContinuousMode
    }
  }

  const content = Object.keys(settingDefinitions).map((val, i) => {
    return <SettingListItem key={shortId.generate()} settingDefinition={settingDefinitions[val]} />
  })

  return <View style={styles.wrapper}>{content}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  }
})

export default inject('settingStore')(observer(SettingsList))
