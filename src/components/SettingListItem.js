import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import Theme from 'theme'
import { inject, observer } from 'mobx-react'

const defaultProps = {
  settingID: ''
}

const SettingListItem = props => {
  const {
    openSettingModal,
    getUserPropertySetter,
    getUserPropertyValue,
    getSettingDefinition
  } = props.settingStore

  const handlePress = () => {
    if (settingDefinition.type === 'boolean') {
      getUserPropertySetter(props.settingID)()
    } else {
      openSettingModal(props.settingID)
    }
  }

  const settingDefinition = getSettingDefinition(props.settingID)
  const settingValue = getUserPropertyValue(props.settingID)

  // Change setting interaction based on setting type
  const setter =
    settingDefinition.type === 'boolean' ? (
      <Switch value={settingValue} onValueChange={handlePress} />
    ) : (
      <TouchableOpacity onPress={handlePress}>
        <Text style={[styles.text, styles.linkText, styles.value]}>
          {settingValue} {settingDefinition.unit}
        </Text>
      </TouchableOpacity>
    )

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, styles.text]}>{settingDefinition.name}</Text>
      <View style={styles.divider} />

      {setter}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    fontSize: 18,
    color: Theme.textColor
  },
  label: {},
  value: { paddingRight: 5 },

  linkText: { color: Theme.textColor, textDecorationLine: 'underline' },

  divider: {
    flexGrow: 1
  }
})

SettingListItem.defaultProps = defaultProps

export default inject('settingStore')(observer(SettingListItem))
