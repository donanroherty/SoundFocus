import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { inject, observer } from 'mobx-react'
import Clock from 'components/Clock'
import Theme from 'theme'
import Icon from 'react-native-vector-icons/Ionicons'

const defaultProps = {
  screenName: 'Screen Name'
}

const ScreenHeader = props => {
  const soundIcon = props.ambianceStore.globalMute ? 'md-volume-off' : 'md-volume-high'

  const { darkMode } = props.userPropertyStore
  const textColor = Theme.getTextColor(darkMode)
  const textColorStyle = { color: Theme.getTextColor(darkMode) }

  return (
    <View style={styles.wrapper}>
      {/* Back button */}
      <View style={styles.leftDiv}>
        <TouchableOpacity onPress={props.navigateHome} style={styles.backButton}>
          <Icon name="md-arrow-back" size={30} color={textColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.middleDiv}>
        {/* Clock */}
        <TouchableOpacity onPress={props.navigateHome}>
          <Clock remaining={props.timerStore.remaining} size={70} />
        </TouchableOpacity>

        {/* Screen title */}
        <Text style={[styles.title, textColorStyle]}>{props.screenName}</Text>
      </View>

      {/* Mute button */}
      {/* <View style={styles.rightDiv}>
        <TouchableOpacity onPress={props.ambianceStore.toggleMute} style={styles.muteButton}>
          <Icon name={soundIcon} size={30} color={textColor} />
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 30
  },
  leftDiv: {
    width: 50
  },
  middleDiv: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  rightDiv: {
    width: 50,
    alignItems: 'flex-end'
  },
  backButton: {
    marginLeft: 20,
    marginTop: 30
  },
  muteButton: {
    marginRight: 20,
    marginTop: 30
  },
  title: {
    fontFamily: Theme.font.regular,
    fontSize: 22,
    fontWeight: '100',
    color: Theme.colorText,
    marginTop: 10
  }
})

ScreenHeader.defaultProps = defaultProps

export default inject('timerStore')(
  inject('ambianceStore')(inject('userPropertyStore')(observer(ScreenHeader)))
)
