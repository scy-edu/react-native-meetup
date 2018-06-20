'use strict';

import React, { Component } from 'react';
import { 
	FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Photo from './Photo.js';

class PhotoList extends Component {
	get photos() {
		return this.props.photos.map((photo, index) => {
			return {
				key: `photo-${index}`,
				img: photo.img,
				username: photo.username,
				author: photo.author,
			};
		});
	};

	render() {
		return (
			<FlatList 
				data={this.photos} 
				renderItem={({item}) => (<Photo uri={item.img} author={item.author} username={item.username} />)}
				/>
		);
	}
}

PhotoList.propTypes = {
	photos: PropTypes.array.isRequired,
};

PhotoList.defaultProps = {
	photos: [],
};

export default PhotoList;
