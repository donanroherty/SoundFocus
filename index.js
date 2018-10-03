/** @format */

import { AppRegistry } from 'react-native'
// import App from './App'
import { name as appName } from './app.json'

import { Client } from 'bugsnag-react-native';
const bugsnag = new Client('084d2752f497b751471a2ca4d984badb');
// bugsnag.notify(new Error("Test error"));

/**
 * Fix mobx decorators issue with babel
 * https://github.com/facebook/react-native/issues/19955#issuecomment-421295617
 */
import applyDecoratedDescriptor from '@babel/runtime/helpers/esm/applyDecoratedDescriptor'
import initializerDefineProperty from '@babel/runtime/helpers/esm/initializerDefineProperty'

Object.assign(babelHelpers, { applyDecoratedDescriptor, initializerDefineProperty })
const App = require('./App').default

AppRegistry.registerComponent(appName, () => App)
