import React, { useState } from 'react'
import { addTodo } from '../../redux/actions'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'

function TodoInput(){
    let dispath=useDispatch()
    let [text,setText]= useState()
return(
    <div className='input-task'>
            
            <input onChange={(event)=>setText(event.target.value)} value={text} type='text' />
            <button onClick={()=>{
                dispath(addTodo(
                    {
                    id: uuid(),
                    name: text
                }
                ));
            setText('')}}>Добавить</button>
    </div>
)

}


export default  TodoInput