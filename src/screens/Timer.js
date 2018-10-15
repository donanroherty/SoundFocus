import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Clock from 'components/Clock'
import IntervalCounter from 'components/IntervalCounter'
import PlayBar from 'components/PlayBar'
import { inject, observer } from 'mobx-react'
import { Dimensions } from 'react-native'
import Theme from 'theme'
import InfoModal from 'components/Modals/InfoModal'

const { width } = Dimensions.get('window')

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
    const bgColorStyle = { backgroundColor: Theme.getBackgroundColor(darkMode) }

    const resetModalContent = (
      <Text>This will reset the current timer and completed work intervals. Are you sure?</Text>
    )

    return (
      <View style={[styles.wrapper, bgColorStyle]}>
        <InfoModal
          title="Reset Timer"
          content={resetModalContent}
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
          <PlayBar
            openSettings={() => {
              this.props.navigation.navigate('Settings')
            }}
            openAmbiance={() => {
              this.props.navigation.navigate('Ambiance')
            }}
          />
        </View>
      </View>
    )
  }
}

// const Timer = props => {

// }

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
  }
})

export default inject('timerStore')(inject('userPropertyStore')(observer(Timer)))
