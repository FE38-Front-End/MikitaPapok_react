import React from 'react';
import {render} from 'react-dom';
import ShownBlock from './shown-block/shown-block'
import useMouseMove from './utils/useMouseMove'
import './index.scss'

const root=document.getElementById('root')

 function ShowCord(){
  const cord=useMouseMove()

  return(
    <div className='coord-block'>
      <h1>Положение мыши</h1>
      <div className='coord-block__component'>
        <ShownBlock coordinate='X' onMouseMove={cord.x}/>
        <ShownBlock coordinate='Y' onMouseMove={cord.y} />
      </div>
      
      
    </div>
  )


};
render( <ShowCord/>,root)