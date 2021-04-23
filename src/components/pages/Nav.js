import React from 'react'
import {Link} from 'react-router-dom'


function Nav(props){
    
    return(
        <nav className='nav'>
            <Link to="/">
                <h3>Главная</h3>
            </Link>
            
            <ul>
                <Link to="/input">
                    <li>Написать</li>
                </Link>
                <Link to="/tasks">
                    <li>Посмотреть</li>
                </Link>
                
            </ul>
            
            <button className='toggle-button' onClick={props.lightDark}></button>
            

        </nav>
    )



}

export default Nav;