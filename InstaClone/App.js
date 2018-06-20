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

/*
 * Import components
 */

import Header from './components/Header';
import Footer from './components/Footer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
			<View style={styles.container}>
				<Header />
				<Footer />
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
