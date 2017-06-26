import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './TodoRedux/reducers/index'
import ReduxTodo from './TodoRedux/components/ReduxTodo'

let store = createStore(todoApp)

// render(
//     <Provider store={store}>
//         <ReduxTodo />
//     </Provider>,
// 	document.getElementById('todo')
// )