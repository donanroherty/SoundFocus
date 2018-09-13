import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const defaultProps = {
  iconSize: 30
}

const PlayBar = props => {
  const soundIcon = props.ambianceStore.globalMute ? 'md-volume-off' : 'md-volume-high'
  const playIcon = props.timerStore.timerIsActive ? 'md-pause' : 'md-play'
  const resetIcon = 'md-refresh'

  return (
    <View style={styles.wrapper}>
      <View style={styles.row1}>
        <TouchableOpacity onPress={props.timerStore.reset}>
          <Icon name={resetIcon} size={props.iconSize} color={Theme.colorPrimary} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.timerStore.toggleActive}
          style={[styles.circle, styles.button]}
        >
          <Icon name={playIcon} size={props.iconSize} color={Theme.colorPrimary} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.ambianceStore.toggleMute}>
          <Icon name={soundIcon} size={props.iconSize} color={Theme.colorPrimary} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.row2}>
        <TouchableOpacity onPress={props.openOptions}>
          <Icon name="ios-more" size={props.iconSize} color={Theme.colorPrimary} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column'
    // alignItems: 'center'
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  row2: {
    marginTop: 10,
    alignItems: 'center'
  },
  button: {
    margin: 30
  },
  circle: {
    borderWidth: 1,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    width: defaultProps.iconSize + 20,
    height: defaultProps.iconSize + 20,
    borderColor: Theme.colorPrimary
  }
})
PlayBar.defaultProps = defaultProps

export default inject('timerStore')(inject('ambianceStore')(observer(PlayBar)))
