import React, {useState} from 'react'
import  ButtonBlock from './buttons/button-block'
import  ValueBlock from './value-block'

function CountBLock(){
    const[count,setCount]=useState(0)

    
    
        return(
        
                <div className="count-block">
                    <ValueBlock count={count}></ValueBlock>
                    <ButtonBlock plusHandler={()=>setCount(count+1)} minusHandler={()=>setCount(count-1)} refreshHandler={()=>setCount(0)}></ButtonBlock>
                </div>
                
        
    )}


export default CountBLock