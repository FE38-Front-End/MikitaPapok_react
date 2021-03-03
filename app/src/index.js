import React,{useState} from 'react'
import {render} from 'react-dom'
import ValueBlock from './components/exchange-block'
const root=document.getElementById('root');


function CurrencyBlock (){   
    const currentByn=2.61  
    const currentUsd=0.81      
      const   [param,setParam]=useState({byn:'', usd:''})
      const conevtToUsd=(event)=>setParam({byn: event.target.value, usd: +event.target.value*currentUsd})
      const convertToByn=(event)=>setParam({byn: +event.target.value*currentByn, usd: event.target.value})
      const clearValue=(event)=>setParam({byn: event.target.value='', usd: event.target.value=''})
    return(
            <div>
                <h1>Live currency converter</h1>
                <ValueBlock id="byn"  conversion={conevtToUsd}  clearValue={clearValue} value={param.byn} currency="BYN:"></ValueBlock>
                <ValueBlock id="usd"  conversion={convertToByn} clearValue={clearValue}  value={param.usd} currency="$, USD:"></ValueBlock>
            </div>
         )
    }


render (<CurrencyBlock/>,root)
