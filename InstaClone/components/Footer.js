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
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopWidth: 0.2,
		borderTopColor: 'grey',
		padding: 10,
	},
	label: {
		fontSize: 20,
		fontFamily: 'Avenir',
	},
});

const Footer = ({
	label,
	type,
}) => (
	<View style={styles[type]}>
		<Text style={styles['label']}>{label}</Text>
	</View>
);

Footer.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

Footer.defaultProps ={
	label: 'Built in Los Angeles',
	type: 'default',
};

Footer.displayName = 'Footer';

export default Footer;
