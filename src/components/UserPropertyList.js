import React from 'react'
import { View, StyleSheet, SectionList, Text } from 'react-native'
import UserPropBoolean from 'components/UserProps/UserPropBoolean'
import UserPropInteger from 'components/UserProps/UserPropInteger'
import UserPropAction from 'components/UserProps/UserPropAction'
import { inject, observer } from 'mobx-react'
import Theme from 'theme'

const UserPropertyList = props => {
  const workDurationProp = (
    <UserPropInteger
      shortName="workDuration"
      name="Work Duration"
      unit="mins"
      min={1}
      max={180}
      value={props.userPropertyStore.workDuration}
      propertyAction={props.userPropertyStore.setWorkDuration}
      showPropertyModal={props.showPropertyModal}
    />
  )

  const shortBreakDurationProp = (
    <UserPropInteger
      shortName="shortBreakDuration"
      name="Short Break Duration"
      unit="mins"
      min={1}
      max={180}
      value={props.userPropertyStore.shortBreakDuration}
      propertyAction={props.userPropertyStore.setShortBreakDuration}
      showPropertyModal={props.showPropertyModal}
    />
  )

  const longBreakDurationProp = (
    <UserPropInteger
      shortName="longBreakDuration"
      name="Long Break Duration"
      unit="mins"
      min={1}
      max={180}
      value={props.userPropertyStore.longBreakDuration}
      propertyAction={props.userPropertyStore.setLongBreakDuration}
      showPropertyModal={props.showPropertyModal}
    />
  )

  const workIntervalCountProp = (
    <UserPropInteger
      shortName="workIntervalCount"
      name="Work Interval Count"
      unit="mins"
      min={1}
      max={180}
      value={props.userPropertyStore.workIntervalCount}
      propertyAction={props.userPropertyStore.setWorkIntervalCount}
      showPropertyModal={props.showPropertyModal}
    />
  )

  const continuousModeProp = (
    <UserPropBoolean
      shortName="continuousMode"
      name="Continous Mode"
      value={props.userPropertyStore.continuousMode}
      propertyAction={props.userPropertyStore.toggleContinuousMode}
    />
  )

  const keepScreenOnProp = (
    <UserPropBoolean
      shortName="keepScreenOn"
      name="Keep Screen On"
      value={props.userPropertyStore.keepScreenOn}
      propertyAction={props.userPropertyStore.toggleKeepScreenOn}
    />
  )

  const darkModeProp = (
    <UserPropBoolean
      shortName="darkMode"
      name="Dark Mode"
      value={props.userPropertyStore.darkMode}
      propertyAction={props.userPropertyStore.toggleDarkMode}
    />
  )

  const resetUserPropsProp = (
    <UserPropAction
      shortName="resetUserPropsToDefault"
      name="Reset To Defaults"
      icon="md-refresh"
      showIcon={true}
      propertyAction={props.userPropertyStore.resetUserPropsToDefault}
    />
  )

  const aboutProp = (
    <UserPropAction
      shortName="about"
      name="About"
      icon="md-information-circle"
      showIcon={true}
      propertyAction={props.showAboutModal}
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
