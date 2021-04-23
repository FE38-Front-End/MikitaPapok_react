import React,{useState} from 'react'
// import TodoInput from './components/todoComponents/TodoInput'
// import  TodoItem from './components/todoComponents/TodoItem'
// import  TodoList    from './components/todoComponents/TodoList'
import InputPage from './components/pages/InputPage'
import TaskPage from './components/pages/TaskPage'
import Nav from './components/pages/Nav'
import './style.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function    App(){
    const [lite,setLite]=useState(true)
    const lightHandler=()=>{setLite(!lite)}
    return(
       <Router>
           <div className={`${lite ? "project" : " project-dark" }`}>
                <Nav lightDark={lightHandler}/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/input" component={InputPage} />
                    <Route path="/tasks" component={TaskPage} /> 
                </Switch>
                
            </div>
           
       </Router> 
    

    )

}

const Home=()=>(
    <div className='container'>
        <h1>Начните создавать список дел</h1>
        <p>Для того, чтобы начать новый проект нажмите кнопку "Начать писать"</p>
        
    </div>
)

export default App;
