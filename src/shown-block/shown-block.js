import React from 'react'
import Title from './shown-block-component/shown-block-title'
import Text from './shown-block-component/shown-block-coord'


export default function ShownBlock(props){
    return(
        <div className='shown-block__component' >
            <Title coordinate={props.coordinate}></Title>
            <Text onMouseMove={props.onMouseMove}></Text>

        </div>
    )
}