import React from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import UserPropertyListItem from 'components/UserPropertyListItem'
import { inject, observer } from 'mobx-react'

const UserPropertyList = props => {
  const workDurationProp = (
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
  )

  const shortBreakDurationProp = (
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
  )

  const longBreakDurationProp = (
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
  )

  const workIntervalCountProp = (
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
  )

  const continuousModeProp = (
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
  )

  return (
    <SectionList
      style={styles.sectionList}
      renderItem={({ item, index, section }) => <View key={index}>{item}</View>}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.title}>{title}</Text>}
      sections={[
        {
          title: 'Timer',
          data: [
            workDurationProp,
            shortBreakDurationProp,
            longBreakDurationProp,
            workIntervalCountProp,
            continuousModeProp
          ]
        }
      ]}
      keyExtractor={(item, index) => item + index}
    />
  )
}

const styles = StyleSheet.create({
  sectionList: { flex: 1 },
  title: {
    fontWeight: 'bold',
    marginBottom: 20
  }
})

export default inject('userPropertyStore')(observer(UserPropertyList))
