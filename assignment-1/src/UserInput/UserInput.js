import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={props.changeUserName} value={props.userName}/>
        </div>
    )
};

export default userInput;