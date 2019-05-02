import React from 'react';
import './CharComponent.css'

const character = (props) => {
    return (
        <div onClick={props.click} className="Character">
            {props.char}
        </div>
    )
};

export default character;