import React from 'react'
import CountBLock from './count-block'

function FinalBlock(){
    return(
        <div class="lines lines-margin" >
            <div class="line line-one" id="line-one">
                <CountBLock/>
                <CountBLock/>
                <CountBLock/>
            </div>
            <div class="line line-two" id="line-two">
                <CountBLock/>
                <CountBLock/>
            </div>
        </div>
    )
}

export default FinalBlock