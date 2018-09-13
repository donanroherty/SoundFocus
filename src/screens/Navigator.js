import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

//Screens
import Timer from 'screens/Timer'
import Ambiance from 'screens/Ambiance'
import Settings from 'screens/Settings'

const TabBar = createMaterialBottomTabNavigator(
  {
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
    initialRouteName: 'Ambiance',
    shifting: true,
    activeTintColor: '#2699FB',
    inactiveTintColor: '#777777',
    barStyle: { backgroundColor: '#FFF' }
  }
)

const Stack = createStackNavigator(
  {
    Home: {
      screen: Timer
    },
    Options: {
      screen: TabBar
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

export default class Nav extends Component {
  render() {
    return <Stack />
  }
}
