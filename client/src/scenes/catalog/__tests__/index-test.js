import 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';
import store from 'src/redux/store';

import {
	Provider
} from 'react-redux';

import {
	Catalog
} from 'src/scenes';

describe('<Catalog />', () => {
	const getWrapper = () => renderer.create(
		<Provider
			store={store}
		>
			<Catalog />
		</Provider>
	).toJSON();

	it('renders correctly', () => {
		const tree = getWrapper();
		expect(tree).toMatchSnapshot();
	});
});
