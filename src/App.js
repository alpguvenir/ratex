import './App.css';
import SideNavigation from "./SideNavigation/SideNavigation";
import Home from "./Pages/Home";
import Chart from "./Pages/Chart";
import News from "./Pages/News";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <SideNavigation/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/charts' component={Chart}/>
                    <Route path='/news' component={News}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
