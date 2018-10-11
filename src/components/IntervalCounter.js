import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { inject, observer } from 'mobx-react'
import shortId from 'shortid'
import Theme from 'theme'

const IntervalCounter = props => {
  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)


  const content = new Array(props.userPropertyStore.workIntervalCount)
    .fill(undefined)
    .map((val, i) => {
      const color = i < props.timerStore.intervalsCompleted + 1 ? 'darkgray' : 'lightgray'
      const size = i < props.timerStore.intervalsCompleted + 1 ? 15 : 7

      return (
        <View style={[styles.marker,{ width: size, height: size, backgroundColor: textColor }]} key={shortId.generate()} />
      )
    })

  return <View style={styles.wrapper}>{content}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems:'center',
  
  },
  marker: {
    width: 15, 
    height: 15,
    margin:4,
    borderRadius: 90
    // padding: 4
  }
})

export default inject('userPropertyStore')(inject('timerStore')(observer(IntervalCounter)))
