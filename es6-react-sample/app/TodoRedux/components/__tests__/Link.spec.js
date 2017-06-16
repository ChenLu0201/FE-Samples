import React from 'react'
import { shallow } from 'enzyme';
import Footer from '../Footer'

const setup = propOverrides => {
	const props = Object.assign({
		active: true,
		children: 'ALL',
		onClick: jest.func,
	}, propOverrides)

	const wrapper = shallow(<Footer {...props} />);

	return {
		props: props,
		wrapper: wrapper
	}
}

describe('components', () => {
	describe('Footer', () => {
		it('should render container', () => {
			const { wrapper } = setup();
			expect(wrapper.node.type).toBe('p');
			expect(wrapper.node.props.children.length).toBe(7);
		})
	})
})
