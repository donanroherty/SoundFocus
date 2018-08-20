import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import Theme from 'theme'
import { inject, observer } from 'mobx-react'

const defaultProps = {
  settingDefinition: {
    name: 'Work Interval Count',
    type: 'integer',
    unit: '',
    min: 1,
    max: 60,
    value: 0,
    action: null
  }
}

const SettingListItem = props => {
  const handlePress = () => {
    props.settingStore.openSettingModal(props.settingDefinition)
  }

  const handleSwitch = () => {
    props.settingDefinition.action()
  }

  const setter =
    props.settingDefinition.type === 'boolean' ? (
      <Switch value={props.settingDefinition.value} onValueChange={handleSwitch} />
    ) : (
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.text, styles.linkText, styles.value]}>
          {props.settingDefinition.value} {props.settingDefinition.unit}
        </Text>
      </TouchableOpacity>
    )

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, styles.text]}>{props.settingDefinition.name}</Text>
      <View style={styles.divider} />

      {setter}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    // width: '100%',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    fontSize: 18,
    color: Theme.textColor
  },
  label: {},
  value: { paddingRight: 5 },

  linkText: { color: Theme.linkColor, textDecorationLine: 'underline' },

  divider: {
    flexGrow: 1
  }
})

SettingListItem.defaultProps = defaultProps

export default inject('settingStore')(observer(SettingListItem))
