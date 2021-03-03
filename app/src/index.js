import React,{useState} from 'react'
import {render} from 'react-dom'
import Exchange from './components/exchange-block'
const root=document.getElementById('root');


function FinalBlock (){   
        
      const   [param,setParam]=useState({byn:'', usd:''})
    return(
            <div>
                <h1>Live currency converter</h1>
                <Exchange id="byn"  conversion={(event)=>setParam({byn: event.target.value, usd: +event.target.value*0.81})}  clear={(event)=>setParam({byn: event.target.value='', usd: event.target.value=''})} value={param.byn} currency="BYN:"></Exchange>
                <Exchange id="usd"  conversion={(event)=>setParam({byn: +event.target.value*2.61, usd: event.target.value})} clear={(event)=>setParam({usd: event.target.value='', byn: event.target.value=''})}  value={param.usd} currency="$, USD:"></Exchange>
            </div>
         )
    }


render (<FinalBlock/>,root)
