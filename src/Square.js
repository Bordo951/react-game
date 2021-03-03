import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick} data-square={props.index}>
            {props.value}
        </button>
    );
}

export default Square;
