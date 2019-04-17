import React from 'react';

const ButtonGroup = (props) => {

    return (
        <div>
            {props.technologies.map( tech => <button>{tech}</button>)}
        </div>
    )
}

export default ButtonGroup;

