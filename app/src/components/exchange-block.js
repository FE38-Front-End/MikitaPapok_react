import React from 'react'


function ValueBlock(props){
    return(
        <fieldset className="exchange-block exchange-block__component">
                <legend >Enter currency in {props.currency}</legend>
                <label for={props.id}></label>
                <input id={props.id} onChange={props.conversion} onClick={props.clearValue} value={props.value} placeholder='0'></input>
            </fieldset>
    )
}
export default ValueBlock