import './top.css';
import {useState} from 'react';

function Top ({ setShowModal }) {

    function setModalToTrue() {
        setShowModal(true);
    }

    // Add setModalToFalse if click on button "submit" {...}

    return (

    <div id="top">
        <img src="mingbai.png" id="mingbai_logo"></img>
        <div id="quote">“What I cannot create, I do not understand.”
            ― Richard P. Feynman</div>
        <button onClick = {setModalToTrue} id="add-btn">Create new Definition</button>
    </div>

    );
}

export default Top;