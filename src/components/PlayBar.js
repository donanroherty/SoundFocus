import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Ionicons'
import theme from 'theme'

const defaultProps = {
  iconSize: 35
}

const PlayBar = props => {
  const icon = props.ambianceStore.globalMute ? 'md-volume-off' : 'md-volume-high'

  const handlePressMuteToggle = () => {
    props.ambianceStore.toggleMute()
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handlePressMuteToggle} style={styles.circle}>
        <Icon name={icon} size={props.iconSize} color={theme.colorPrimary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    borderWidth: 1,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    width: defaultProps.iconSize + 20,
    height: defaultProps.iconSize + 20,
    borderColor: theme.colorPrimary
  }
})
PlayBar.defaultProps = defaultProps

export default inject('ambianceStore')(observer(PlayBar))
