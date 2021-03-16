
import { useState, useEffect} from 'react'


export default function (){
    let [cord, setCord]=useState({x: 0, y: 0})
    const moveOn=(event)=>setCord({x: event.clientX, y: event.clientY})


    useEffect(()=>{
            document.addEventListener('mousemove', moveOn)
        return ()=>{
            document.removeEventListener('mousemove', moveOn)
        }
    },[])

    return cord
}