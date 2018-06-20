'use strict';

import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import {
	FlatList,
} from 'react-native';
import PhotoList from '../../components/PhotoList';
import pictures from '../../json/pictures.json';

const createTestProps = () => ({
	photos: pictures,
});

describe('<PhotoList />', () => {
	const wrapper = shallow(
		<PhotoList {...createTestProps()} />
	);

	describe('rendering', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<PhotoList {...createTestProps()} />).toJSON();
		});

		it('should render the same number of photos as the JSON provides', () => {
			expect(wrapper.find(FlatList).props().data.length).toEqual(pictures.length);
		});
	});

	describe('interactions', () => {
		it('gets photos', () => {
			expect(wrapper.instance().photos.length).toEqual(pictures.length);
		});
	});

});
