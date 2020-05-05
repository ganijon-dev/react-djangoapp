import React, { Component} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ToolList from './components/ToolList/ToolList';
import WebSiteList from './components/WebSiteList/WebSiteList';

class App extends Component {
    
    render() {
     
      return ( 
        <BrowserRouter>
        <Redirect to='tools'/>
        <div className = "App" >  
            <Navbar/>
            <Switch>
            <Route exact path= '/' component= {ToolList}/>
              <Route exact path= '/tools' component= {ToolList}/>
              <Route exact path= '/sites' component= {WebSiteList}/>
            </Switch>
            
        </div >
        </BrowserRouter>
      );
    };
}

export default App;