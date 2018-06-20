'use strict';

import React, { Component } from 'react';
import {
	TouchableOpacity,
	LayoutAnimation,
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
	constructor(props) {
		super(props);
		this.state = {
			s: 300,
		};
	}
	get imageAttributes() {
		const {
			uri,
		} = this.props;

		return {
			style: {
				flex: 1,
				height: this.state.s,
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

	_onPress = () => {
		LayoutAnimation.spring();

		if (this.state.s > 300) {
			this.setState({
				s: this.state.s - 15,
			});
		} else {
			this.setState({
				s: this.state.s + 15,
			});
		}
	}

	render() {
		return (
			<View style={styles['wrapper']}>
				{this.author}
				<TouchableOpacity onPress={this._onPress}>
					<Image {...this.imageAttributes} />
				</TouchableOpacity>
			</View>
		);
	}
}

export default Photo;
