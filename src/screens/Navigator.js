import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

//Screens
import Timer from 'screens/Timer'
import Ambiance from 'screens/Ambiance'
import Settings from 'screens/Settings'

const TabBar = createMaterialBottomTabNavigator(
  {
    Timer: {
      screen: Timer,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-timer" size={25} color={tintColor} />
      }
    },
    Ambiance: {
      screen: Ambiance,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-musical-note" size={25} color={tintColor} />
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-settings" size={25} color={tintColor} />
      }
    }
  },
  {
    initialRouteName: 'Timer',
    shifting: true,
    activeTintColor: '#2699FB',
    inactiveTintColor: '#777777',
    barStyle: { backgroundColor: '#FFF' }
  }
)

export default class Nav extends Component {
  render() {
    return <TabBar />
  }
}
