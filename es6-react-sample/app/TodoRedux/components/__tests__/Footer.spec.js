import Footer from '../Footer';
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk]);

describe('<FilterLink />', () => {
	it('renders with default props', () => {
		const store = mockStore({});
		const dispatch = jest.fn();
		store.dispatch = dispatch;
		const wrapper = mount(
			<Provider store={store}>
				<Footer />
			</Provider>
		);
		wrapper.find('a').at(1).simulate('click');
		expect(dispatch.mock.calls.length).toEqual(1);
		expect(dispatch.mock.calls[0]).toEqual([{"filter": "SHOW_ACTIVE", "type": "SET_VISIBILITY_FILTER"}]);
	});
});