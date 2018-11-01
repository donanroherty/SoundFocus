import React from 'react'
import { View } from 'react-native'
import { Provider } from 'mobx-react'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import KeepAwake from 'react-native-keep-awake'

// Screens
import Timer from 'screens/Timer'
import Ambiance from 'screens/Ambiance'
import Settings from 'screens/Settings'
// State store
import AppStore from 'stores/AppStore'
import AudioPlayerStack from 'components/AudioPlayerStack'

import ScreenHeader from 'components/ScreenHeader'

import Theme from 'theme'

const NavBar = createMaterialTopTabNavigator(
  {
    Ambiance: {
      screen: Ambiance
    },
    Settings: {
      screen: Settings
    }
  },
  {
    initialRouteName: 'Ambiance',
    tabBarOptions: {
      style: {
        backgroundColor: 'black'
      },
      activeTintColor: Theme.colorPrimary,
      indicatorStyle: {
        backgroundColor: Theme.colorPrimary
      }
    }
  }
)

class Options extends React.Component {
  constructor(props) {
    super(props)

    this.tabBarOptions = {
      style: {
        backgroundColor: 'black'
      }
    }
  }

  render() {
    const navigateHome = () => {
      this.props.navigation.navigate('Home')
    }

    return (
      <>
        <ScreenHeader screenName="Ambiance" navigateHome={navigateHome} />
        <NavBar />
      </>
    )
  }
}

const NavStack = createStackNavigator(
  {
    Home: {
      screen: Timer
    },
    Options: {
      screen: Options
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerMode: 'none',
      header: null
    }
  }
)

export default class App extends React.Component {
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
