'use strict';

import 'react-native';
import React from 'react';
import Footer, {
	styles,
} from '../../components/Footer';

import renderer from 'react-test-renderer';
import {
	shallow,
} from 'enzyme';

const createTestProps = () => ({
	label: 'Built in Los Angeles',
	type: 'default',
});

describe('<Footer />', () => {
	let wrapper;

	describe('rendering', () => {
		// run before each test
		beforeEach(() => {
			wrapper = shallow(<Footer {...createTestProps()} />);
		});

		it('renders correctly', () => {
			const tree = renderer.create(<Footer />).toJSON();
			expect(tree).toMatchSnapshot();
		});

		it('renders Built in Los Angeles in the name', () => {
			expect(wrapper.find('Text').contains('Built in Los Angeles')).toBe(true);
		});

		describe('styling', () => {
			it('should have the title style', () => {
				expect(wrapper.find('Text').prop('style')).toBe(styles['label']);
			});
		});
	});

});
