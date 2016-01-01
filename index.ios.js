/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  StatusBarIOS
} = React;

var Main = require('./src/main')

StatusBarIOS.setHidden(true, true)

AppRegistry.registerComponent('wanderwort', () => Main);
