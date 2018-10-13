import React from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import UserPropertyListItem from 'components/UserPropertyListItem'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

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
      action={props.userPropertyStore.setWorkDuration}
      showPropertyModal={props.showPropertyModal}
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
      action={props.userPropertyStore.setShortBreakDuration}
      showPropertyModal={props.showPropertyModal}
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
      action={props.userPropertyStore.setLongBreakDuration}
      showPropertyModal={props.showPropertyModal}
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
      action={props.userPropertyStore.setWorkIntervalCount}
      showPropertyModal={props.showPropertyModal}
    />
  )

  const continuousModeProp = (
    <UserPropertyListItem
      shortName="continuousMode"
      name="Continous Mode"
      type="boolean"
      value={props.userPropertyStore.continuousMode}
      action={props.userPropertyStore.toggleContinuousMode}
    />
  )

  const keepScreenOnProp = (
    <UserPropertyListItem
      shortName="keepScreenOn"
      name="Keep Screen On"
      type="boolean"
      value={props.userPropertyStore.keepScreenOn}
      action={props.userPropertyStore.toggleKeepScreenOn}
    />
  )

  const darkModeProp = (
    <UserPropertyListItem
      shortName="darkMode"
      name="Dark Mode"
      type="boolean"
      value={props.userPropertyStore.darkMode}
      action={props.userPropertyStore.toggleDarkMode}
    />
  )

  const resetUserPropsProp = (
    <UserPropertyListItem
      shortName="resetUserPropsToDefault"
      name="Reset To Defaults"
      actionIcon="md-refresh"
      type="action"
      action={props.userPropertyStore.resetUserPropsToDefault}
    />
  )

  const aboutProp = (
    <UserPropertyListItem
      shortName="about"
      name="About"
      actionIcon="md-information-circle"
      type="action"
      action={props.showAboutModal}
    />
  )

  const { darkMode } = props.userPropertyStore
  const textColorStyle = { color: Theme.getTextColor(darkMode) }

  return (
    <SectionList
      style={styles.sectionList}
      renderItem={({ item, index, section }) => <View key={index}>{item}</View>}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[styles.title, textColorStyle]}>{title}</Text>
      )}
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
        },
        {
          title: 'General',
          data: [keepScreenOnProp, darkModeProp]
        },
        {
          title: 'App',
          data: [resetUserPropsProp, aboutProp]
        }
      ]}
      keyExtractor={(item, index) => item + index}
    />
  )
}

const styles = StyleSheet.create({
  sectionList: { flex: 1 },
  title: {
    marginBottom: 20
  }
})

export default inject('userPropertyStore')(observer(UserPropertyList))
