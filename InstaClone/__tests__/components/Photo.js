'use strict';

import React from 'react';
import {
	shallow,
} from 'enzyme';
import renderer from 'react-test-renderer';
import Photo from '../../components/Photo';

const createTestProps = () => ({

});

describe('<Photo />', () => {
	const wrapper = shallow(
		<Photo {...createTestProps()} />
	);

	describe('rendering', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<Photo {...createTestProps()} />).toJSON();
		});

	});

	describe('interaction', () => {
		it('should return the correct image attributes', () => {
			const imgAttr = wrapper.instance().imageAttributes;
			expect(typeof imgAttr).toBe('object');
			expect(imgAttr.style.flex).toEqual(1);
			expect(imgAttr.style.height).toEqual(300);
		});

		it('should return author', () => {
			const author = wrapper.instance().author;
			expect(author.props.style.flex).toEqual(1);
			expect(author.props.style.flexDirection).toBe('row');
		});
	});

});
