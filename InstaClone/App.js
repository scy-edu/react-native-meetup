/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
	StyleSheet,
	AsyncStorage,
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
	async componentDidMount() {
		await this.setItem('name', 'Stanley');
		await this.getItem('name');
	}

	async setItem(key, value) {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (err) {
			console.error(err);
		}
	}

	async getItem(key) {
		let item;
		try {
			item = await AsyncStorage.getItem(key);
		} catch (err) {
			console.error(err);
		}
		console.log('found item', item);
	}

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
