let nextTodoID = 0

export const ADD_TODO = 'ADD_TODO'

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextTodoID++,
        text: text
    }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = (id) => {
    return {
        type : TOGGLE_TODO,
        id: id
    }
}


