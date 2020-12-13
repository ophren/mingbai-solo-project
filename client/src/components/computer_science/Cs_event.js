import './Cs_event.css';
import List from '../list/list.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Cs_event ({descriptions, cs}) {
    return (
        <div>
            <div id="top">
                <Link to = "/"><img src="mingbai.png" id="mingbai_logo"></img></Link>
                <button id="add-btn">Create new Definition</button>
            </div>
            <div id="page">
                <div id="welcome_phrase">Computer Science</div>
                <div id="cs-quote">“The computer was born to solve problems that did not exist before.”
                — Bill Gates</div>
                <List descriptions = {descriptions} keyword = {cs}></List>
            </div>
        </div>
    );
}

export default Cs_event;