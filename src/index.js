import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from "./Main";
import Initializer from "./Initializer";

let initializer = new Initializer();
initializer.initApp();

ReactDOM.render(
    <Main/>,
    document.getElementById("root")
);


