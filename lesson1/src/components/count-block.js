import React, {Component} from 'react'
import  ButtonBlock from './buttons/button-block'
import  ValueBlock from './value-block'

class CountBLock extends Component{
    constructor(props){
        super(props)
        this.state={count: 0}
        this.plusHandler=this.plusHandler.bind(this)
        this.minusHandler=this.minusHandler.bind(this)
        this.refreshHandler=this.refreshHandler.bind(this)
    }

    refreshHandler(){
        this.setState({
            count: 0
        })
    }

    plusHandler(){
        this.setState((state)=>{
            return {count: state.count+1}
        })

    }
    minusHandler(){
        this.setState((state)=>{
            return{count: state.count-1}

        })
    }
        
    render(){
        return(
        
                <div className="count-block">
                    <ValueBlock count={this.state.count}></ValueBlock>
                    <ButtonBlock plusHandler={this.plusHandler} minusHandler={this.minusHandler} refreshHandler={this.refreshHandler}></ButtonBlock>
                </div>
                
        
    )}
}

export default CountBLock