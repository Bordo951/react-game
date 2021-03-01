import React from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";
import Game from "./pages/Game";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Tic-Tac-Toe</h1>
                    <ul className="header">
                        <li><NavLink to="/">Game</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Game}/>
                        <Route path="/about" component={About}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/statistics" component={Statistics}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
