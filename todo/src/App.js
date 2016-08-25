import React, { Component } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import { createStore } from 'redux'
import todos from './reducers'
import { AddTodo,TodoList } from './components'

let store = createStore(todos)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <AddTodo />
            <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App;
