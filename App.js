import React from 'react'
import Navigator from 'screens/Navigator'

import { Provider } from 'mobx-react'
import Store from 'stores'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.rootStore = new Store()
  }

  render() {
    return (
      <Provider
        store={this.rootStore}
        timerStore={this.rootStore.timerStore}
        settingsStore={this.rootStore.settingsStore}
      >
        <Navigator />
      </Provider>
    )
  }
}
