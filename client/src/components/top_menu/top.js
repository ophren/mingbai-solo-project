import './top.css';
import {BrowserRouter as Link} from 'react-router-dom';

function Top ({ setShowModal }) {

    function setModalToTrue() {
        setShowModal(true);
    }

    return (
    <div id="top">
        <Link to = "/"><img src="mingbai.png" id="mingbai_logo"></img></Link>
        <div id="quote">“What I cannot create, I do not understand.”
            ― Richard P. Feynman
        </div>
        <button onClick = {setModalToTrue} id="add-btn">Create new Definition</button>
    </div>
    );
}

export default Top;