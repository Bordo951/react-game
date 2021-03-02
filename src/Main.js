import React from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Game from "./pages/Game";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import RSLogo from "./images/rs_school_logo.svg";

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Tic-Tac-Toe</h1>
                    <ul className="navigation">
                        <li className="navigation__item"><NavLink className="navigation__link" exact to="/">Game</NavLink></li>
                        <li className="navigation__item"><NavLink className="navigation__link" to="/about">About</NavLink></li>
                        <li className="navigation__item"><NavLink className="navigation__link" to="/settings">Settings</NavLink></li>
                        <li className="navigation__item"><NavLink className="navigation__link" to="/statistics">Statistics</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Game}/>
                        <Route path="/about" component={About}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/statistics" component={Statistics}/>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer__logo-wrapper">
                        <a className="footer__logo-link" href="https://rs.school/js/">
                            <img className="footer__logo" src={RSLogo} alt={RSLogo}/>
                        </a>
                    </div>
                    <div className="footer__author-wrapper">
                        <a className="footer__author-link" href="https://github.com/Bordo951">Selivanova Irina</a>
                    </div>
                    <div className="footer__year">2021</div>
                </footer>
            </HashRouter>
        );
    }
}

export default Main;
