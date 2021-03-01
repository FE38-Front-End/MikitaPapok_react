import React,{Component} from 'react'
import {render} from 'react-dom'
import Exchange from './components/exchange-block'
const root=document.getElementById('root');


class FinalBlock extends Component{
    constructor(props){
        super(props)
        this.state={byn:'', usd:''}
    }
    fromBynToUsd(){
        this.setState((event)=>{
            return{byn: event.target.value,
                    usd: +event.target.value*0.81}
        })
    }

    fromUsdToByn(){
        this.setState((event)=>{
            return{byn: +event.target.value*2.61,usd: event.target.value}
        })
    }


    render(){
        return(
            <div>
                <h1>Live currency converter</h1>
                <Exchange id="byn"  conversion={this.fromBynToUsd} value={this.state.byn} currency="BYN:"></Exchange>
                <Exchange id="usd"  conversion={this.fromBynToUsd} value={this.state.usd} currency="$, USD:"></Exchange>
            </div>
            
                    
            
            
        )
    }
}

render (<FinalBlock/>,root)
