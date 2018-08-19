import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import SettingListItem from 'components/SettingListItem'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class SettingsList extends Component {
  render() {
    const { settings } = this.props.store

    return (
      <View style={styles.wrapper}>
        <SettingListItem
          name="Interval Length"
          shortName="intervalLength"
          type="integer"
          unit="mins"
          min={1}
          max={180}
          value={settings.intervalSeconds}
          action={settings.setIntervalSettings}
          openSettingModal={settings.openSettingModal}
        />
        <SettingListItem
          name="Interval Count"
          shortName="intervalCount"
          type="integer"
          min={1}
          max={10}
          value={settings.intervalCount}
          action={settings.setIntervalCount}
          openSettingModal={settings.openSettingModal}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  }
})

export default SettingsList
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SettingsList)
