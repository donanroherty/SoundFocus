import React from 'react'
import Navigator from 'screens/Navigator'

import { Provider } from 'react-redux'
import configStore from 'reducers'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configStore()}>
        <Navigator />
      </Provider>
    )
  }
}
