import React from 'react';
import './ValidationComponent.css'

const validation = (props) => {
    
    const inputLength = props.inputLength;
    let validationOutput = "Text too short"

    if(inputLength >= 5) {
        validationOutput = "Text long enough"
    }

    return (
        <div className="Validation">
            <p>{validationOutput}</p>
        </div>
    )
};

export default validation;