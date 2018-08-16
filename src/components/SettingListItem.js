import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
// import Dash from 'react-native-dash'
import Theme from 'theme'

const defaultProps = {
  name: 'setting name',
  shortName: 'settingName',
  type: 'integer',
  unit: 'mins',
  min: 0,
  max: 1,
  value: 0,
  action: {}
}

const SettingListItem = props => (
  <View style={styles.wrapper}>
    <Text style={[styles.label, styles.text]}>{props.name}</Text>
    <View style={styles.divider} />

    {/* <Dash
      style={styles.divider}
      dashGap={8}
      dashLength={15}
      dashThickness={3}
      dashColor="darkgrey"
      dashStyle={styles.dashStyle}
    /> */}

    <Text style={[styles.text, styles.linkText, styles.value]}>{props.value}</Text>
    <Text style={[styles.text, styles.linkText, styles.unit]}>{props.unit}</Text>
  </View>
)

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
  unit: {},
  linkText: { color: Theme.linkColor },
  divider: {
    flexGrow: 1
  }
})

SettingListItem.defaultProps = defaultProps

export default SettingListItem
