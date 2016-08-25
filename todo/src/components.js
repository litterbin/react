import React from 'react'
import {connect} from 'react-redux'
import {addTodo as addTodoAction } from './actions'
import {toggleTodo as toggleTodoAction} from './actions'


class addTodo extends React.Component {
    render() {
        let input
        return (
            <div>
            <form onSubmit={ e=> {
                e.preventDefault()
                this.props.dispatch(addTodoAction(input.value))
                input.value = ''
            }}>
            <input type="text" name="text" ref={ node => {
                    input = node
            }}/>
            <button type="submit">submit</button>
            </form>
            </div>
        )
    }
}

class Todo extends React.Component {
    render() {
        let done = this.props.done ? "DONE" : "DOING"
        let onClick = this.props.onClick
        return <li onClick={onClick}>{ this.props.text } { done }</li>
    }
}

class todoList extends React.Component {
    render() {
        let todos = this.props.todos
        let onClick = this.props.onClick
        return (
            <ol>
            { todos.map(t=> {
                return <Todo key={t.id} text={t.text} done={t.done} onClick={() => onClick(t.id)} />
            })}
            </ol>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onClick: (id) => {
            dispatch(toggleTodoAction(id))
        }
    }
}

export const AddTodo = connect()(addTodo)
export const TodoList = connect(mapStateToProps,mapDispatchToProps)(todoList)
