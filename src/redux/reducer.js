import  {ADD_TODO,DELETE_TODO,UPDATE_TODO} from './actions';
let localStorage=window.localStorage;
const initialState=localStorage.getItem('newTodos')? JSON.parse(localStorage.getItem('newTodos')):[];


export let reducer=(state=initialState,action)=>{
    let newTodos;
    
    switch (action.type) {
        case ADD_TODO:
             newTodos=[...state];
            newTodos.push(action.payload)
            localStorage.setItem('newTodos',JSON.stringify(newTodos))
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }
            }
            if (index != -1) {
                newTodos[index] = action.payload;
                localStorage.setItem('newTodos',JSON.stringify(newTodos))
                return newTodos;
            }
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            localStorage.setItem('newTodos',JSON.stringify(newTodos))
            return newTodos;
        
        
  
        
    }
    return state;

}