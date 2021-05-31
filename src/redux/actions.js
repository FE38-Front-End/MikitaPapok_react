export const ADD_TODO='ADD_TODO';
export const DELETE_TODO='DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_INCOMPLETE= 'ADD_INCOMPLETE'
export const DELETE_INCOMPLETE = 'DELETE_INCOMPLETE'
export const ADD_COMPLETE= 'ADD_INCOMPLETE'
export const DELETE_COMPLETE = 'DELETE_INCOMPLETE'
export const SET_FILTER = "SET_FILTER";


export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export function addTodo(todo){
        return{
            type: ADD_TODO,
            payload: todo
        }

}

export function deleteTodo(todoId){
    return{
            type: DELETE_TODO,
            payload:todoId

    }


}

export  function updateTodo(todo){
    return{
        type: UPDATE_TODO,
        payload: todo
    }
}
