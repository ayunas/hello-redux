import React from 'react';
import store from './store';
import setTechnology from './actions';
import render from './index';

const ButtonGroup = (props) => {

    return (
        <div>
            {props.technologies.map( (tech,i) => <button 
            data-tech={tech} 
            key={i} 
            className='hello-btn'
            onClick={dispatchBtnAction}
            >{tech}</button>)}
        </div>
    )
}

export default ButtonGroup;

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
    store.subscribe(render);
}

