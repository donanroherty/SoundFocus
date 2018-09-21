/**
 * @format
 * @flow
 */
import React from 'react'
import Navigator from 'screens/Navigator'
import { Provider } from 'mobx-react'
import KeepAwake from 'react-native-keep-awake'
import AppStore from 'stores/AppStore'

import AudioPlayerStack from 'components/AudioPlayerStack'

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
          <Navigator />
          <AudioPlayerStack />
          {this.appStore.timerStore.timerIsActive && <KeepAwake />}
        </>
      </Provider>
    )
  }
}
