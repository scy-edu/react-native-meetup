'use strict';

import React, { Component } from 'react';
import {
	Dimensions,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
const {
	width,
} = Dimensions.get('screen');

export const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	authorRow: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	margin: {
		marginHorizontal: 8,
	},
	round: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	username: {
		fontSize: 15,
		fontWeight: 'bold',
	},
});

class Photo extends Component {
	get imageAttributes() {
		const {
			uri,
		} = this.props;

		return {
			style: {
				flex: 1,
				height: 300,
				width,
			},
			source: {
				uri,
			}
		};
	}

	get author() {
		const {
			author,
			username,	
		} = this.props;

		return <View style={styles['authorRow']}>
			<Image 
				style={[styles['round'], styles['margin']]} 
				source={{uri: author}} 
				/>
			<Text style={styles['username']}>{username}</Text>
		</View>
	}

	render() {
		return (
			<View style={styles['wrapper']}>
				{this.author}
				<Image {...this.imageAttributes} />
			</View>
		);
	}
}

export default Photo;
