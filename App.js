/**
 * @format
 * @flow
 */
import React from 'react'
import { Provider } from 'mobx-react'
import { createStackNavigator } from 'react-navigation'
import KeepAwake from 'react-native-keep-awake'

// Screens
import Timer from 'screens/Timer'
import Ambiance from 'screens/Ambiance'
import Settings from 'screens/Settings'

// State store
import AppStore from 'stores/AppStore'

import AudioPlayerStack from 'components/AudioPlayerStack'

const NavStack = createStackNavigator(
  {
    Home: {
      screen: Timer
    },
    Ambiance: {
      screen: Ambiance
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Settings',
    navigationOptions: {
      headerMode: 'none',
      header: null
    }
  }
)


type Props = {}
export default class App extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.appStore = new AppStore()
  }

  render() {
 
    return (   
      <Provider
        timerStore={this.appStore.timerStore}
        userPropertyStore={this.appStore.userPropertyStore}
        ambianceStore={this.appStore.ambianceStore}
        notificationStore={this.appStore.notificationStore}
      >
        <>
          <NavStack />
          <AudioPlayerStack />
          {this.appStore.timerStore.timerIsActive && <KeepAwake />}
        </>
      </Provider>
    )
  }
}
