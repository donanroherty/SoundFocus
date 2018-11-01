import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import { inject, observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import Theme from 'theme'
import ResetTimerModal from 'components/Modals/ResetTimerModal'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resetModalVisible: false
    }
  }

  showResetModal = () => this.setState({ resetModalVisible: true })
  hideResetModal = () => this.setState({ resetModalVisible: false })

  render() {
    const { darkMode } = this.props.userPropertyStore
    const textColor = Theme.getTextColor(darkMode)
    const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    return (
      <View style={[styles.wrapper, bgColorStyle]}>
        <ResetTimerModal
          showModal={this.state.resetModalVisible}
          closeModal={this.hideResetModal}
          propertyAction={this.props.timerStore.reset}
        />

        <View style={styles.topBlock} />

        <View style={styles.timerBlock}>
          <TouchableOpacity
            onPress={this.props.timerStore.toggleActive}
            style={styles.clockContainer}
          >
            <Clock size={100} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showResetModal}>
            <IntervalCounter />
          </TouchableOpacity>
        </View>
        <View style={styles.playbarContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Options')
            }}
            style={styles.button}
          >
            <Icon name="md-settings" size={30} color={textColor} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  moreButton: {
    marginTop: 20,
    marginRight: 20,
    width: 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topBlock: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  timerBlock: {
    flex: 2.8,
    flexDirection: 'column',
    alignItems: 'center'
  },
  clockContainer: { marginBottom: 20 },
  playbarContainer: {
    flex: 2,
    alignItems: 'center'
  },
  button: {
    width: 40, // Add click buffer around icon
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  breakText: {
    color: 'white'
  }
})

export default inject('timerStore')(inject('userPropertyStore')(observer(Timer)))
