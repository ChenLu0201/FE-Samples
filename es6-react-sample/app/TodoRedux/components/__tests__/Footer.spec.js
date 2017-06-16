import Footer from '../Footer';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);
const initState = {};

describe('<FilterLink />', () => {
	it('renders with default props', () => {
		const store = mockStore(initState);
		const wrapper = mount(
			<Provider store={store}>
				<Footer />
			</Provider>
		);
		wrapper.find('a').at(1).simulate('click');
		console.log(wrapper.find('a').length);
	});
});