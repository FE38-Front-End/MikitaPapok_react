import React from 'react'
import  ButtonBlock from './buttons/button-block'
import  ValueBlock from './value-block'

function CountBLock(){
    return(
        <div className="count-block">
            <ValueBlock></ValueBlock>
            <ButtonBlock></ButtonBlock>

        </div>
    )


}

export default CountBLock