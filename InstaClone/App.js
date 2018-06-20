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
import pictures from './json/pictures.json';

/*
 * Import components
 */

import Header from './components/Header';
import PhotoList from './components/PhotoList';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
			<View style={styles.container}>
				<Header />
				<PhotoList 
					photos={pictures}
					/>
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
