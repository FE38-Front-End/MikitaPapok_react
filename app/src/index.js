import React,{Component} from 'react'
import {render} from 'react-dom'
import Exchange from './components/exchange-block'
const root=document.getElementById('root');
const bynCurrency=2.61;
const usdCurrency=0.81;


class FinalBlock extends Component{
    constructor(props){
        super(props)
        this.state={byn:'', usd:''}
    }

    clearValue=(event)=>{
        this.setState(
            {byn: event.target.value='', usd:  event.target.value=''}
            )}

    fromBynToUsd=(event)=>{
        this.setState(
            {byn: event.target.value,
                    usd: +event.target.value*usdCurrency}
        )
    }

    fromUsdToByn=(event)=>{
        this.setState({byn: +event.target.value*bynCurrency,usd: event.target.value}
        )
    }


    render(){
        return(
            <div>
                <h1>Live currency converter</h1>
                <Exchange id="byn"  conversion={this.fromBynToUsd} value={this.state.byn} clearValue={this.clearValue} currency="BYN:"></Exchange>
                <Exchange id="usd"  conversion={this.fromUsdToByn} value={this.state.usd} clearValue={this.clearValue} currency="$, USD:"></Exchange>
            </div>       
        )
    }
}

render (<FinalBlock/>,root)
