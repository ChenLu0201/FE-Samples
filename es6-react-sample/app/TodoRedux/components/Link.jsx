import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Link extends Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render() {
		return (
			<span>
				{(this.props.active) && (<span>{ this.props.children }</span>)}
				{
					(!this.props.active) && (
						<a href="#"
							 onClick={e => {
								 e.preventDefault()
								 this.props.onClick()
							 }}
						>
							{ this.props.children }
						</a>
					)
				}
			</span>
		)
	}
}

export default Link