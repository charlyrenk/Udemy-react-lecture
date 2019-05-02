import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p> This is line two. The input is {props.nameTwo}</p>
        </div>
    )
};

export default userOutput;