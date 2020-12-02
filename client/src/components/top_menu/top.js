import './top.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Top ({ setShowModal }) {

    function setModalToTrue() {
        setShowModal(true);
    }

    // Add setModalToFalse if click on button "submit" {...}

    return (

    <div id="top">
        <Link to = "/"><img src="mingbai.png" id="mingbai_logo"></img></Link>
        <div id="quote">“What I cannot create, I do not understand.”
            ― Richard P. Feynman</div>
        <button onClick = {setModalToTrue} id="add-btn">Create new Definition</button>
    </div>

    );
}

export default Top;