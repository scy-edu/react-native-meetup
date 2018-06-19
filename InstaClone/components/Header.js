'use strict';

import React, {
  Component,
} from 'react';
import {
	View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export const styles = StyleSheet.create({
  default: {
		// Dimensions
		height: 80,
		width: '100%',

		// Border bottom colors
		borderBottomWidth: 0.2,
		borderBottomColor: 'grey',

		// padding
		paddingBottom: 5,

		// align items
		justifyContent: 'flex-end',
	},
	title: {
		alignSelf: 'center',
		fontFamily: 'BradleyHandITCTT-Bold',
		fontSize: 35,
	},
});

const Header = ({
  name,
  type,
}) => (
  <View style={styles[type]}>
    <Text style={styles['title']}>{name}</Text>
  </View>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: 'InstaClone',
  type: 'default',
};

Header.displayName = 'Header';

export default Header;
