import React from 'react'
import { View, StyleSheet } from 'react-native'
import UserPropertyListItem from 'components/UserPropertyListItem'
import { inject, observer } from 'mobx-react'
import { notify } from 'utils/Notifications'

const UserPropertyList = props => {
  return (
    <View style={styles.wrapper}>
      <UserPropertyListItem
        shortName="workDuration"
        name="Work Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.userPropertyStore.workDuration}
        setPropertyValue={props.userPropertyStore.setWorkDuration}
      />

      <UserPropertyListItem
        shortName="shortBreakDuration"
        name="Short Break Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.userPropertyStore.shortBreakDuration}
        setPropertyValue={props.userPropertyStore.setShortBreakDuration}
      />

      <UserPropertyListItem
        shortName="longBreakDuration"
        name="Long Break Duration"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.userPropertyStore.longBreakDuration}
        setPropertyValue={props.userPropertyStore.setLongBreakDuration}
      />

      <UserPropertyListItem
        shortName="workIntervalCount"
        name="Work Interval Count"
        type="integer"
        unit="mins"
        min={1}
        max={180}
        value={props.userPropertyStore.workIntervalCount}
        setPropertyValue={props.userPropertyStore.setWorkIntervalCount}
      />

      <UserPropertyListItem
        shortName="continuousMode"
        name="Continous Mode"
        type="boolean"
        unit="mins"
        min={0}
        max={0}
        value={props.userPropertyStore.continuousMode}
        setPropertyValue={props.userPropertyStore.toggleContinuousMode}
      />

      <UserPropertyListItem
        shortName="testNotification"
        name="Test Notification"
        type="action"
        action={notify}
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

export default inject('userPropertyStore')(observer(UserPropertyList))
