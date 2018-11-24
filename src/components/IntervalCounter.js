import React from 'react'
import { View, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import shortId from 'shortid'
import * as Animatable from 'react-native-animatable'
import Theme from 'theme'

const IntervalCounter = props => {
  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)

  const content = new Array(props.userPropertyStore.workIntervalCount)
    .fill(undefined)
    .map((val, i) => {
      const awaitingIntervalStart =
        props.timerStore.remaining === props.userPropertyStore.workDuration * 60

      const onBreak = props.timerStore.timerMode !== 'WORK'

      const completedThisSession =
        props.timerStore.intervalsCompleted % props.userPropertyStore.workIntervalCount

      const markerState =
        i < completedThisSession || (i === 0 && onBreak)
          ? 'complete'
          : i < completedThisSession + 1 && !onBreak && !awaitingIntervalStart
            ? 'active'
            : 'pending'

      const markerStyle =
        markerState === 'active'
          ? styles.markerActive
          : markerState === 'complete'
            ? styles.markerComplete
            : styles.markerPending

      return (
        <View style={styles.markerWrapper} key={shortId.generate()}>
          <View style={[styles.marker, markerStyle]} />
          {/* {markerState === 'active' ? (
            <Animatable.View
              animation={{ 0: { scale: 1 }, 1: { scale: 0.5 } }}
              iterationCount="infinite"
              direction="alternate"
              duration={4000}
              easing="ease-in-out"
            >
              <View style={[styles.marker, markerStyle]} />
            </Animatable.View>
          ) : (
            <View style={[styles.marker, markerStyle]} />
          )} */}
        </View>
      )
    })

  return <View style={styles.wrapper}>{content}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  markerWrapper: {
    width: 15,
    height: 15,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    width: 15,
    height: 15,
    margin: 4,
    borderRadius: 90
    // padding: 4
  },
  markerPending: {
    width: 7,
    height: 7,
    backgroundColor: 'white'
  },
  markerActive: {
    borderWidth: 2,
    borderWidth: 2,
    borderColor: 'white'
  },
  markerComplete: {
    backgroundColor: 'white'
  }
})

export default inject('userPropertyStore')(inject('timerStore')(observer(IntervalCounter)))
