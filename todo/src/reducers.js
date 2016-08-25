import {ADD_TODO,TOGGLE_TODO} from './actions'

const todo = (t={},action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                done: false
            }
        case TOGGLE_TODO:
            if (t.id !== action.id ) {
                return t
            }
            return Object.assign({},t,{
                done: !t.done
            })
        default:
            return t
    }
}

const todos = (state = [],action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined,action)
            ]
        case TOGGLE_TODO:
            return state.map(t => todo(t,action))
        default:
            return state
    }
}

export default todos
