import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo, toggleTodo } from '../../redux/actions';
import {useState} from 'react'


export default function TodoItem({todo}){
    let dispath = useDispatch();
    const [edit,setEdit]= useState(false)
    const [name, setName]= useState(todo.name)
   
    const editHandler=()=>{
        dispath(updateTodo(
            {
                ...todo,
                name:name
            }
        ))
        if(edit){
            setName(name)
            
        }
        setEdit(!edit)
        
    }

    const deleteHandler=()=>{
        dispath(deleteTodo(todo.id))
    }
    const [type, setType]=useState(false)
    const toggleClassNames=()=>{ console.log(window.localStorage) 
        return setType(!type)}
    return(            
            <li className='todo-item'>
                {edit?<input type='text' className='edit-input' value={name} onChange={(event)=>{setName(event.target.value)}}/>
                : <div  onClick={toggleClassNames} className={`todo-item__text ${
                    type ? "todo-item__text--completed" : ""
                  }`}>{todo.name}</div>}
                <div className='btn-container'>
                    <button className='button-edit' onClick={editHandler}>{edit? 'Принять':'Изменить'}</button> 
                    <button className='button-delete' onClick={deleteHandler}>Удалить</button>
                
                </div>                
            </li>               
    )    
}