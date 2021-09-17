import './App.css';
import SideNavigation from "./SideNavigation/SideNavigation";
import Home from "./Pages/Home";
import Charts from "./Pages/Charts";
import News from "./Pages/News";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <SideNavigation/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/charts' component={Charts}/>
                    <Route path='/news' component={News}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
