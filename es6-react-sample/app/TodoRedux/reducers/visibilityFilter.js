const visibilityFilter = (state = 'SHOW_ALL', action) => {
	console.log('set filter');
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter