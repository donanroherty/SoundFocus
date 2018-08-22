import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import Clock from 'components/Clock'
import Theme from 'theme'

const defaultProps = {
  screenName: 'Screen Name'
}

const ScreenHeader = props => {
  return (
    <View style={styles.wrapper}>
      <Clock remaining={props.timerStore.remaining} size={60} />
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
    fontFamily: Theme.font.regular,
    fontSize: 22,
    fontWeight: '100',
    color: Theme.textColor
  }
})

ScreenHeader.defaultProps = defaultProps

export default inject('timerStore')(observer(ScreenHeader))
