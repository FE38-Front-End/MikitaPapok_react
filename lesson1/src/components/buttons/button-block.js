import React from 'react'
import ButtonPlus from './button-plus'
import ButtonMinus from './button-minus'
import ButtonRefresh from './button-refresh'

function ButtonBlock(props){
return(
    <div className="count-block-buttons">
        <ButtonPlus plusHandler={props.plusHandler} ></ButtonPlus>
        <ButtonRefresh refreshHandler={props.refreshHandler}></ButtonRefresh>
        <ButtonMinus minusHandler={props.minusHandler}></ButtonMinus>

    </div>
)

}

export default ButtonBlock