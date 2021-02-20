import React from 'react'
import ButtonPlus from './button-plus'
import ButtonMinus from './button-minus'
import ButtonRefresh from './button-refresh'

function ButtonBlock(){
return(
    <div className="count-block-buttons">
        <ButtonPlus></ButtonPlus>
        <ButtonRefresh></ButtonRefresh>
        <ButtonMinus></ButtonMinus>

    </div>
)

}

export default ButtonBlock