import React from 'react'
import {render} from 'react-dom'
import './style.scss'
import CountBLock from './components/count-block'

const lineOne=document.getElementById('line-one');
const lineTwo=document.getElementById('line-two');


render([<CountBLock/>,<CountBLock/>,<CountBLock/>],lineOne);
render([<CountBLock/>,<CountBLock/>],lineTwo)