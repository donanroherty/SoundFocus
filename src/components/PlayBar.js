import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Ionicons'
import Theme from 'theme'

const defaultProps = {
  iconSize: 30
}

const buttonSize = 30

const PlayBar = props => {
  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)
  const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }

  return (
    <View style={styles.wrapper}>
      <View style={styles.row1}>
        {/* Reset timer */}
        {/* <TouchableOpacity onPress={props.timerStore.reset}>
          <Icon name="md-refresh" size={props.iconSize} color={textColor} />
        </TouchableOpacity> */}

        {/* Start timer */}
        {/* <TouchableOpacity
          onPress={props.timerStore.toggleActive}
          style={[styles.circle, styles.button]}
        >
          <Icon
            name={props.timerStore.timerIsActive ? 'md-pause' : 'md-play'}
            size={props.iconSize}
            color={Theme.colorPrimary}
          />
        </TouchableOpacity> */}

        {/* Open ambiance screen */}
        <TouchableOpacity onPress={props.openAmbiance} style={styles.button}>
          <Icon name="md-musical-note" size={buttonSize} color={textColor} />
        </TouchableOpacity>

        <TouchableOpacity onPress={props.openSettings} style={styles.button}>
          <Icon name="md-more" size={buttonSize} color={textColor} />
        </TouchableOpacity>
      </View>
      {/* Options button */}
      {/* <View style={styles.row2}>
        <TouchableOpacity onPress={props.openSettings}>
          <Icon name="ios-more" size={props.iconSize} color={textColor} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column'
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  row2: {
    marginTop: 40,
    alignItems: 'center'
  },
  button: {
    width: buttonSize + 10, // Add click buffer around icon
    height: buttonSize + 10,
    marginLeft: 40,
    marginRight: 40,
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
    borderColor: Theme.colorPrimary
  }
})
PlayBar.defaultProps = defaultProps

export default inject('timerStore')(
  inject('ambianceStore')(inject('userPropertyStore')(observer(PlayBar)))
)
