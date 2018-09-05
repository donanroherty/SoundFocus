/**
 * @format
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import Navigator from 'screens/Navigator'
import { Provider } from 'mobx-react'
import AppStore from 'stores/AppStore'

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
        <Navigator />
      </Provider>
    )
  }
}
