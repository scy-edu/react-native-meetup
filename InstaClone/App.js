/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
			<View style={styles.container}>
				<Header />
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
