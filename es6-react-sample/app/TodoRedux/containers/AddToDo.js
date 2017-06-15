import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddToDoForm extends Component {
	static propsTypes = {
		dispatch: PropTypes.func.isRequired
	}

	render() {
    let input;
		return (<div>
        <form onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					this.props.dispatch(addTodo(input.value))
					input.value = ''
				}}>
            <input ref={node => {
							input = node
						}}/>
            <button type="submit">
                Add Todo
            </button>
        </form>
    </div>);
	}
}

export default connect()(AddToDoForm)