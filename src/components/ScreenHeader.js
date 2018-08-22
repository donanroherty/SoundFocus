import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import Clock from 'components/Clock'

const defaultProps = {
  screenName: 'Screen Name'
}

const ScreenHeader = props => {
  return (
    <View style={styles.wrapper}>
      <Clock remaining={props.timerStore.remaining} />
      <Text style={styles.title}>{props.screenName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: '100'
  }
})

ScreenHeader.defaultProps = defaultProps

export default inject('timerStore')(observer(ScreenHeader))
