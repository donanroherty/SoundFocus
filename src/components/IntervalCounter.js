import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import shortId from 'shortid'

const IntervalCounter = props => {
  const content = new Array(props.userPropertyStore.workIntervalCount)
    .fill(undefined)
    .map((val, i) => {
      const color = i < props.timerStore.intervalsCompleted + 1 ? 'darkgray' : 'lightgray'
      const icon = i < props.timerStore.intervalsCompleted ? 'md-add' : 'md-remove'
      return (
        <Icon key={shortId.generate()} name={icon} size={25} color={color} style={styles.marker} />
      )
    })

  return <View style={styles.wrapper}>{content}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  marker: {
    padding: 4
  }
})

export default inject('userPropertyStore')(inject('timerStore')(observer(IntervalCounter)))
