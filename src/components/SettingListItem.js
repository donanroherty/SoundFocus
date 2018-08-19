import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Theme from 'theme'

const defaultProps = {
  name: 'setting name',
  shortName: 'settingName',
  type: 'integer',
  unit: 'mins',
  min: 0,
  max: 1,
  value: 0
}

const SettingListItem = props => {
  const handlePress = () => {
    props.openSettingModal({
      name: props.name,
      shortName: props.shortName,
      type: props.type,
      unit: props.unit,
      min: props.min,
      max: props.max,
      value: props.value
    })
  }

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, styles.text]}>{props.name}</Text>
      <View style={styles.divider} />

      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.text, styles.linkText, styles.value]}>
          {props.value} {props.unit}
        </Text>
      </TouchableOpacity>
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

export default SettingListItem
