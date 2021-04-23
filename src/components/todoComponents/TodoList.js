import React from 'react'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'


function TodoList(){
    let todos= useSelector(state=>state)
    
    
    return(
        
                <ul className='todo-list'>
                     <h4>список ваших дел</h4>
                    {todos.map(todo=>{
                    return <TodoItem  key={todo.id} todo={todo}/>

                        })}
                    
                </ul>
                
      
        
    )
}

export default TodoList