import React from 'react'
import Navigator from 'screens/Navigator'

import { Provider } from 'mobx-react'
import AppStore from 'stores'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.appStore = new AppStore()
  }

  render() {
    return (
      <Provider timerStore={this.appStore.timerStore} settingStore={this.appStore.settingStore}>
        <Navigator />
      </Provider>
    )
  }
}
