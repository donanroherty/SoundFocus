import React from 'react'
import { View, StyleSheet } from 'react-native'
import SettingListItem from 'components/SettingListItem'
import { inject, observer } from 'mobx-react'

const SettingsList = props => {
  return (
    <View style={styles.wrapper}>
      <SettingListItem
        shortName="workDuration"
        name="Work Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.settingStore.workDuration}
        setPropertyValue={props.settingStore.setWorkDuration}
      />

      <SettingListItem
        shortName="shortBreakDuration"
        name="Short Break Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.settingStore.shortBreakDuration}
        setPropertyValue={props.settingStore.setShortBreakDuration}
      />

      <SettingListItem
        shortName="longBreakDuration"
        name="Long Break Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.settingStore.longBreakDuration}
        setPropertyValue={props.settingStore.setLongBreakDuration}
      />

      <SettingListItem
        shortName="workIntervalCount"
        name="Work Interval Count"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.settingStore.workIntervalCount}
        setPropertyValue={props.settingStore.setWorkIntervalCount}
      />

      <SettingListItem
        shortName="continuousMode"
        name="Continous Mode"
        type="boolean"
        unit="mins"
        min={0}
        max={0}
        value={props.settingStore.continuousMode}
        setPropertyValue={props.settingStore.toggleContinuousMode}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  }
})

export default inject('settingStore')(observer(SettingsList))
