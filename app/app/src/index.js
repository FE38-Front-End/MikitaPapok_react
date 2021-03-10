import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FinalBlock from './componets/counter/components/finalBlock';
import CurrencyBlock from './componets/exchanger/index';
import './style.scss';
const root=document.getElementById('root');

export default function App(){
    return(
        <Router>
            <nav>
                 <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/exchanger">exchanger</Link>
                    </li>
                    <li>
                        <Link to="/encounter">encounter</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/exchanger">
                    <CurrencyBlock />
                </Route>
                <Route path="/encounter">
                    <FinalBlock />
                </Route>
                <Route path='/' exact>
                    <div className='home'>
                        <Home />
                    </div>
                </Route>
                
                <Route path="/*">
                    <div className='error'>
                    <h1 className="error-message">Error</h1>
                    </div>
                </Route>
            </Switch>
      
         </Router>

        
    )
}

function Home(){
    return<h1>Home</h1>
}



render(<App/>,root)
